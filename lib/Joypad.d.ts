import { JoypadEventEmitter } from './JoypadEventEmitter';
import type { JoypadConfig } from './JoypadManager';
import type { JoypadMap } from './mappings';
/**
 * Vibration parameters for the Chrome-specific vibration actuator interface.
 */
export interface VibrationParameters {
    /**
     * Delay in milliseconds before starting the vibration.
     */
    startDelay: number;
    /**
     * Duration in milliseconds.
     */
    duration: number;
    /**
     * The magnitude of the weak motor between 0 and 1.
     */
    weakMagnitude: number;
    /**
     * The magnitude of the strong motor between 0 and 1.
     */
    strongMagnitude: number;
}
/**
 * Chrome-specific vibration actuator
 */
interface VibrationActuator {
    /**
     * Play a vibration effect - returns the result of the vibration.
     */
    playEffect: (type: 'dual-rumble', parameters: VibrationParameters) => Promise<'invalid-parameter' | 'complete' | 'preempted'>;
    /**
     * Reset the running (if any) vibration effect. Will cause that vibration to be resolved with "preempted".
     */
    reset: () => Promise<'complete'>;
}
/**
 * Extends the native gamepad API with the Chrome-specific vibration actuator
 */
interface Gamepad extends globalThis.Gamepad {
    vibrationActuator?: VibrationActuator;
}
/**
 * The state of an individual analog stick.
 */
export interface StickState {
    /**
     * The name/alias of the stick.
     */
    name: string;
    value: {
        /**
         * The value of the mapped X axis.
         */
        x: number;
        /**
         * The value of the mapped Y axis.
         */
        y: number;
        /**
         * The angle of the stick in radians.
         */
        angle: number;
    };
}
/**
 * The state of a button.
 */
export interface ButtonState {
    /**
     * The name/alias of the button.
     */
    name: string;
    /**
     * The value of the mapped button.
     */
    value: number;
}
/**
 * The Joypad class that is used to create joypads in the [JoypadManager]{@linkcode JoypadManager}.
 */
export declare class Joypad extends JoypadEventEmitter {
    readonly index: number;
    private joypadConfig;
    private mappings;
    private buttonState;
    private connected;
    private nativePad?;
    /**
     * The id retrieved from the native gamepad id.
     */
    private id?;
    /**
     * @param index The gamepad index in the [JoypadManager.joypads]{@linkcode JoypadManager.joypads} array.
     * @param joypadConfig The joypad configuration.
     * @param mappings Custom gamepad button mappings.
     */
    constructor(index: number, joypadConfig: JoypadConfig, mappings: JoypadMap[]);
    /**
     * The key-value mappings of the joypad buttons.
     */
    get buttons(): {
        [key: string]: ButtonState;
    };
    /**
     * The key-value mappings of the joypad sticks.
     */
    get sticks(): {
        [key: string]: StickState;
    };
    /**
     * The current mapping this gamepad is using.
     */
    get mapping(): JoypadMap | undefined;
    /**
     * Set the id
     * @param id the native id
     */
    private setId;
    /**
     * Is the controller connected? Determined by checking if this is attached to a native gamepad AND if that native gamepad is connected.
     */
    get isConnected(): boolean;
    /**
     * The function to call to initiate the connect event
     * @param nativePad the native HTML5 Gamepad
     */
    private connect;
    /**
     * The function to call to initiate the disconnect event
     * @param nativePad the native HTML5 Gamepad
     */
    private disconnect;
    /**
     * The main update loop function
     * @param nativePad the native HTML5 Gamepad object
     */
    update(nativePad: Gamepad | null): void;
    /**
     * Sync this.nativePad with the updated gamepad, return whether or not it is connected.
     */
    private syncNativePad;
    /**
     * Loop through buttons
     */
    private loopButtons;
    /**
     * Determine whether or not an axis should fire the change event
     * @param stateValue the previous value
     * @param nativeValue the new value
     */
    private checkAxis;
    /**
     * Loop through analog sticks
     */
    private loopSticks;
    /**
     * Vibrate the controller if supported.
     */
    vibrate(vibrationParameters?: Partial<VibrationParameters>): Promise<"complete" | "invalid-parameter" | "preempted" | undefined>;
    /**
     * Stop any current vibrations.
     */
    stopVibrate(): Promise<"complete"> | undefined;
}
export {};
