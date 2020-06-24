var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JoypadEventEmitter } from './JoypadEventEmitter';
import * as JOYPAD_EVENTS from './event-names';
import generateButtonState from './generate-button-state';
/**
 * The Joypad class that is used to create joypads in the [JoypadManager]{@linkcode JoypadManager}.
 */
export class Joypad extends JoypadEventEmitter {
    /**
     * @param index The gamepad index in the [JoypadManager.joypads]{@linkcode JoypadManager.joypads} array.
     * @param joypadConfig The joypad configuration.
     * @param mappings Custom gamepad button mappings.
     */
    constructor(index, joypadConfig, mappings) {
        super();
        this.index = index;
        this.joypadConfig = joypadConfig;
        this.mappings = mappings;
        this.connected = false;
    }
    /**
     * The key-value mappings of the joypad buttons.
     */
    get buttons() {
        var _a;
        return (((_a = this.buttonState) === null || _a === void 0 ? void 0 : _a.buttons) || []).reduce((buttonMap, button) => {
            // eslint-disable-next-line no-param-reassign
            buttonMap[button.name] = button;
            return buttonMap;
        }, {});
    }
    /**
     * The key-value mappings of the joypad sticks.
     */
    get sticks() {
        var _a;
        return (((_a = this.buttonState) === null || _a === void 0 ? void 0 : _a.sticks) || []).reduce((stickMap, stick) => {
            // eslint-disable-next-line no-param-reassign
            stickMap[stick.name] = stick;
            return stickMap;
        }, {});
    }
    /**
     * The current mapping this gamepad is using.
     */
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
     * Is the controller connected? Determined by checking if this is attached to a native gamepad AND if that native gamepad is connected.
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
        var _a, _b;
        const nativePad = this.nativePad;
        (_b = (_a = this.buttonState.mapping) === null || _a === void 0 ? void 0 : _a.buttons) === null || _b === void 0 ? void 0 : _b.forEach((buttonMapping, index) => {
            const nativeButton = nativePad.buttons[index];
            if (!nativeButton) {
                return;
            }
            const buttonState = this.buttons[buttonMapping.name];
            const previousValue = buttonState.value;
            // always set state every loop
            buttonState.value = nativeButton.value;
            // if a button value is different than the new value
            if (nativeButton.value !== previousValue) {
                if (buttonMapping.analog) {
                    if (
                    // always send event if value is 0 or 1
                    nativeButton.value === 1 || previousValue === 1 || nativeButton.value === 0 || previousValue === 0) {
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
                if (nativeButton.value === 1 && previousValue === 0) {
                    this.dispatchEvent(JOYPAD_EVENTS.BUTTON_PRESS, {
                        button: buttonState,
                        joypad: this,
                        nativeButton,
                        nativePad,
                        index,
                    });
                }
                else if (nativeButton.value === 0 && previousValue === 1) {
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
     * Determine whether or not an axis should fire the change event
     * @param stateValue the previous value
     * @param nativeValue the new value
     */
    checkAxis(stateValue, nativeValue) {
        if (stateValue === nativeValue) {
            return false;
        }
        const stateAbs = Math.abs(stateValue);
        const nativeAbs = Math.abs(nativeValue);
        const stateIsDead = Math.abs(stateAbs) <= this.joypadConfig.axisDeadzone;
        const nativeIsDead = Math.abs(nativeAbs) <= this.joypadConfig.axisDeadzone;
        // if both are dead - no event
        if (stateIsDead && nativeIsDead) {
            return false;
        }
        return true;
    }
    /**
     * Loop through analog sticks
     */
    loopSticks() {
        var _a, _b;
        const nativePad = this.nativePad;
        (_b = (_a = this.buttonState.mapping) === null || _a === void 0 ? void 0 : _a.sticks) === null || _b === void 0 ? void 0 : _b.forEach((stickMapping) => {
            let nativeX = nativePad.axes[stickMapping.axes.x];
            let nativeY = nativePad.axes[stickMapping.axes.y];
            // if both are undefined - no event
            if (nativeX === undefined && nativeY === undefined) {
                return;
            }
            // set either to 0 if they are undefined
            nativeX = nativeX === undefined ? 0 : nativeX;
            nativeY = nativeY === undefined ? 0 : nativeY;
            const stickState = this.sticks[stickMapping.name];
            const previousX = stickState.value.x;
            const previousY = stickState.value.y;
            // make sure we update state every loop
            stickState.value.x = Math.abs(nativeX) <= this.joypadConfig.axisDeadzone ? 0 : nativeX;
            stickState.value.y = Math.abs(nativeY) <= this.joypadConfig.axisDeadzone ? 0 : nativeY;
            let radians = Math.atan2(stickState.value.y, stickState.value.x);
            if (radians < 0) {
                radians += 2 * Math.PI;
            }
            stickState.value.angle = radians;
            if (this.checkAxis(previousX, nativeX) || this.checkAxis(previousY, nativeY)) {
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
            }
        });
    }
    /**
     * Vibrate the controller if supported.
     */
    vibrate(vibrationParameters = {
        startDelay: 0,
        duration: 1000,
        weakMagnitude: 1,
        strongMagnitude: 1,
    }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const { startDelay = 0, duration = 1000, weakMagnitude = 1, strongMagnitude = 1, } = vibrationParameters;
            return (_b = (_a = this.nativePad) === null || _a === void 0 ? void 0 : _a.vibrationActuator) === null || _b === void 0 ? void 0 : _b.playEffect('dual-rumble', {
                startDelay,
                duration,
                weakMagnitude,
                strongMagnitude,
            });
        });
    }
    /**
     * Stop any current vibrations.
     */
    stopVibrate() {
        var _a, _b;
        return (_b = (_a = this.nativePad) === null || _a === void 0 ? void 0 : _a.vibrationActuator) === null || _b === void 0 ? void 0 : _b.reset();
    }
}
//# sourceMappingURL=Joypad.js.map