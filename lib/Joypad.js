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
        /**
         * Whether or not the controller is connected
         */
        this.connected = false;
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
        if (!nativePad || !nativePad.connected) {
            if (this.connected) {
                this.disconnect(nativePad);
            }
            return;
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
        nativePad.buttons.forEach((nativeButton, index) => {
            const buttonState = this.buttonState.buttons[index];
            if (!buttonState) {
                return;
            }
            // if a button value is different than the new value
            if (nativeButton.value !== buttonState.value) {
                // if it is analog, check against the threshold
                if (buttonState.analog) {
                    if (
                    // always send event if value is 0 or 1
                    nativeButton.value === 1 || buttonState.value === 1 || nativeButton.value === 0 || buttonState.value === 0
                        // send event if the change is larger than the threshold
                        || Math.abs(nativeButton.value - buttonState.value) >= this.joypadConfig.analogThreshold) {
                        buttonState.value = nativeButton.value;
                        this.dispatchEvent('buttonchange', {
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
                    this.dispatchEvent('buttonpress', {
                        button: buttonState,
                        joypad: this,
                        nativeButton,
                        nativePad,
                        index,
                    });
                }
                else if (nativeButton.value === 0 && buttonState.value === 1) {
                    buttonState.value = nativeButton.value;
                    this.dispatchEvent('buttonrelease', {
                        button: buttonState,
                        joypad: this,
                        nativeButton,
                        nativePad,
                        index,
                    });
                }
            }
        });
        nativePad.axes.forEach((value, index) => {
            const axisState = this.buttonState.axes[index];
            const nativeValue = Math.abs(value);
            const stateValue = Math.abs(axisState.value);
            const nativeIsDead = nativeValue <= this.joypadConfig.axisDeadzone;
            const stateIsDead = stateValue <= this.joypadConfig.axisDeadzone;
            if (!axisState) {
                return;
            }
            if (nativeValue !== stateValue) {
                if (
                // do not send event if both are dead - means both are considered zero
                stateIsDead !== nativeIsDead
                    // OR send event if either are dead or either are 1
                    || !stateIsDead || !nativeIsDead
                    // OR send event if they are 1
                    || nativeValue === 1 || stateValue === 1) {
                    axisState.value = nativeIsDead ? 0 : value;
                    this.dispatchEvent(JOYPAD_EVENTS.AXIS_MOVE, {
                        axis: axisState,
                        joypad: this,
                        nativePad,
                        index,
                    });
                }
            }
        });
    }
    vibrate() {
        var _a, _b, _c, _d;
        console.log((_a = this.nativePad) === null || _a === void 0 ? void 0 : _a.vibrationActuator);
        (_c = (_b = this.nativePad) === null || _b === void 0 ? void 0 : _b.hapticActuators) === null || _c === void 0 ? void 0 : _c[0].pulse(10, 5);
        (_d = this.nativePad) === null || _d === void 0 ? void 0 : _d.vibrationActuator.playEffect('dual-rumble', {
            startDelay: 0,
            duration: 1000,
            weakMagnitude: 0,
            strongMagnitude: 1.0,
        });
    }
}
//# sourceMappingURL=Joypad.js.map