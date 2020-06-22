import JoypadEventEmitter from './JoypadEventEmitter';
import { JoypadMap, JoypadConfig } from './types';
export default class Joypad extends JoypadEventEmitter {
    readonly index: number;
    private joypadConfig;
    private mappings;
    /**
     * Button state object
     */
    private buttonState;
    /**
     * Whether or not the controller is connected
     */
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
    vibrate(): void;
}
