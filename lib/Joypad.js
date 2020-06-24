var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import JoypadEventEmitter from './JoypadEventEmitter';
import * as JOYPAD_EVENTS from './event-names';
import generateButtonState from './generate-button-state';
export default class Joypad extends JoypadEventEmitter {
    /**
     * @param index the gamepad index in the JoypadManager.joypads array
     * @param joypadConfig the joypad config
     * @param mappings custom gamepad button mappings
     */
    constructor(index, joypadConfig, mappings) {
        super();
        this.index = index;
        this.joypadConfig = joypadConfig;
        this.mappings = mappings;
        this.connected = false;
    }
    get buttons() {
        return this.buttonState.buttons;
    }
    get sticks() {
        return this.buttonState.sticks;
    }
    get buttonMap() {
        var _a;
        return ((_a = this.buttonState.mapping) === null || _a === void 0 ? void 0 : _a.buttons) || [];
    }
    get stickMap() {
        var _a;
        return ((_a = this.buttonState.mapping) === null || _a === void 0 ? void 0 : _a.sticks) || [];
    }
    get mapping() {
        return this.buttonState.mapping;
    }
    /**
     * Set the id
     * @param id the native id
     */
    setId(id) {
        if (this.id !== id) {
            this.id = id;
            this.buttonState = generateButtonState(this.id, this.mappings);
        }
    }
    /**
     * Check of the controller is connected
     */
    get isConnected() {
        return this.connected;
    }
    /**
     * The function to call to initiate the connect event
     * @param nativePad the native HTML5 Gamepad
     */
    connect(nativePad) {
        this.setId(nativePad.id);
        this.connected = true;
        this.dispatchEvent('connect', {
            joypad: this,
            nativePad,
        });
    }
    /**
     * The function to call to initiate the disconnect event
     * @param nativePad the native HTML5 Gamepad
     */
    disconnect(nativePad) {
        if (this.connected) {
            this.connected = false;
            this.dispatchEvent('disconnect', {
                joypad: this,
                nativePad,
            });
        }
    }
    /**
     * The main update loop function
     * @param nativePad the native HTML5 Gamepad object
     */
    update(nativePad) {
        const connected = this.syncNativePad(nativePad);
        if (!connected) {
            return;
        }
        this.loopButtons();
        this.loopSticks();
    }
    /**
     * Sync this.nativePad with the updated gamepad, return whether or not it is connected.
     */
    syncNativePad(nativePad) {
        if (!nativePad || !nativePad.connected) {
            if (this.connected) {
                this.disconnect(nativePad);
            }
            return false;
        }
        if ((nativePad === null || nativePad === void 0 ? void 0 : nativePad.connected) && !this.connected) {
            this.connect(nativePad);
        }
        if (nativePad && this.nativePad !== nativePad) {
            this.nativePad = nativePad;
        }
        if (!this.id) {
            this.setId(nativePad.id);
        }
        return true;
    }
    /**
     * Loop through buttons
     */
    loopButtons() {
        const nativePad = this.nativePad;
        this.buttonMap.forEach((buttonMapping, index) => {
            const nativeButton = nativePad.buttons[index];
            if (!nativeButton) {
                return;
            }
            const buttonState = this.buttonState.buttons[index];
            // if a button value is different than the new value
            if (nativeButton.value !== buttonState.value) {
                // if it is analog, check against the threshold
                if (buttonMapping.analog) {
                    if (
                    // always send event if value is 0 or 1
                    nativeButton.value === 1 || buttonState.value === 1 || nativeButton.value === 0 || buttonState.value === 0
                        // send event if the change is larger than the threshold
                        || Math.abs(nativeButton.value - buttonState.value) >= this.joypadConfig.analogThreshold) {
                        buttonState.value = nativeButton.value;
                        this.dispatchEvent(JOYPAD_EVENTS.BUTTON_CHANGE, {
                            button: buttonState,
                            joypad: this,
                            nativeButton,
                            nativePad,
                            index,
                        });
                    }
                }
                // we will still process these events for analog buttons so analog buttons can be treated as digital
                if (nativeButton.value === 1 && buttonState.value === 0) {
                    buttonState.value = nativeButton.value;
                    this.dispatchEvent(JOYPAD_EVENTS.BUTTON_PRESS, {
                        button: buttonState,
                        joypad: this,
                        nativeButton,
                        nativePad,
                        index,
                    });
                }
                else if (nativeButton.value === 0 && buttonState.value === 1) {
                    buttonState.value = nativeButton.value;
                    this.dispatchEvent(JOYPAD_EVENTS.BUTTON_RELEASE, {
                        button: buttonState,
                        joypad: this,
                        nativeButton,
                        nativePad,
                        index,
                    });
                }
            }
        });
    }
    /**
     * Loop through analog sticks
     */
    loopSticks() {
        const nativePad = this.nativePad;
        this.stickMap.forEach((stickMapping, index) => {
            let nativeX = nativePad.axes[stickMapping.axes.x];
            let nativeY = nativePad.axes[stickMapping.axes.y];
            // if both are undefined - no event
            if (nativeX === undefined && !nativeY === undefined) {
                return;
            }
            // set either to 0 if they are undefined
            nativeX = nativeX === undefined ? 0 : nativeX;
            nativeY = nativeY === undefined ? 0 : nativeY;
            const stickState = this.sticks[index];
            const stateX = stickState.value.x;
            // sticks aren't forced to have a y value
            const stateY = stickState.value.y;
            // if the values are the same - no event
            if (nativeX === stateX && nativeY === stateY) {
                return;
            }
            const nativeXDead = Math.abs(nativeX) <= this.joypadConfig.axisDeadzone;
            const nativeYDead = Math.abs(nativeY) <= this.joypadConfig.axisDeadzone;
            const stateXDead = Math.abs(stateX) <= this.joypadConfig.axisDeadzone;
            const stateYDead = Math.abs(stateY) <= this.joypadConfig.axisDeadzone;
            // if everything is dead, they are all considered 0 - no change = no event
            if (nativeXDead && nativeYDead && stateXDead && stateYDead) {
                return;
            }
            // if nothing exceeds the analog movement threshold AND the values are not 1 or 0
            if ((Math.abs(stateX - nativeX) <= this.joypadConfig.analogThreshold
                || Math.abs(stateY - nativeY) <= this.joypadConfig.analogThreshold)
                && !nativeXDead && Math.abs(nativeX) !== 1 && !nativeYDead && Math.abs(nativeY) !== 1) {
                return;
            }
            stickState.value.x = nativeXDead ? 0 : nativeX;
            stickState.value.y = nativeYDead ? 0 : nativeY;
            stickState.value.angle = (Math.atan2(stickState.value.x, stickState.value.y) * (180 / Math.PI) + 270) % 360;
            this.dispatchEvent(JOYPAD_EVENTS.STICK_MOVE, {
                stick: stickState,
                joypad: this,
                nativePad,
                nativeAxes: {
                    x: nativeX,
                    y: nativeY,
                },
                index: [stickMapping.axes.x, stickMapping.axes.y],
            });
        });
    }
    /**
     *
     * @param parameters vibrations paramter
     */
    vibrate({ startDelay = 0, duration = 1000, weakMagnitude = 1, strongMagnitude = 1, } = {
        startDelay: 0,
        duration: 1000,
        weakMagnitude: 1,
        strongMagnitude: 1,
    }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            return (_b = (_a = this.nativePad) === null || _a === void 0 ? void 0 : _a.vibrationActuator) === null || _b === void 0 ? void 0 : _b.playEffect('dual-rumble', {
                startDelay,
                duration,
                weakMagnitude,
                strongMagnitude,
            });
        });
    }
    stopVibrate() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            return (_b = (_a = this.nativePad) === null || _a === void 0 ? void 0 : _a.vibrationActuator) === null || _b === void 0 ? void 0 : _b.reset();
        });
    }
}
//# sourceMappingURL=Joypad.js.map