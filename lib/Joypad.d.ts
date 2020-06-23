import JoypadEventEmitter from './JoypadEventEmitter';
import type { JoypadConfig } from './JoypadManager';
import type { JoypadMap } from './mappings';
export interface AxisState {
    name: string;
    value: number;
}
export interface ButtonState {
    analog: boolean;
    name: string;
    value: number;
}
export interface VibrationParameters {
    startDelay: number;
    duration: number;
    weakMagnitude: number;
    strongMagnitude: number;
}
export interface VibrationActuator {
    playEffect: (type: 'dual-rumble', parameters: VibrationParameters) => Promise<'invalid-parameter' | 'complete' | 'preempted'>;
    reset: () => Promise<'complete'>;
}
interface Gamepad extends globalThis.Gamepad {
    vibrationActuator?: VibrationActuator;
}
export default class Joypad extends JoypadEventEmitter {
    readonly index: number;
    private joypadConfig;
    private mappings;
    private buttonState;
    private connected;
    private nativePad?;
    /**
     * The id - retrieved from the native id
     */
    id?: string;
    /**
     * @param index the gamepad index in the JoypadManager.joypads array
     * @param joypadConfig the joypad config
     * @param mappings custom gamepad button mappings
     */
    constructor(index: number, joypadConfig: JoypadConfig, mappings: JoypadMap[]);
    /**
     * Set the id
     * @param id the native id
     */
    private setId;
    /**
     * Check of the controller is connected
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
     *
     * @param parameters vibrations paramter
     */
    vibrate({ startDelay, duration, weakMagnitude, strongMagnitude, }?: Partial<VibrationParameters>): Promise<"complete" | "invalid-parameter" | "preempted" | undefined>;
    stopVibrate(): Promise<"complete" | undefined>;
}
export {};
