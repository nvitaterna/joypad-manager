import { Joypad } from './Joypad';
import { JoypadMap } from './mappings';
export interface JoypadConfig {
    /**
     * The max number of joypads you plan on using.
     * The JoypadManager will loop through this many Joypads each update cycle.
     */
    maxJoypads: number;
    /**
     * The analog stick deadzone
     */
    axisDeadzone: number;
}
export declare class JoypadManager {
    /**
     * The array of joypads.
     */
    readonly joypads: Joypad[];
    /**
     * Initiate the JoypadManager
     * @param joypadConfig Optional Joypad configuration
     * @param mappings Optional custom list of mappings
     */
    constructor(joypadConfig?: Partial<JoypadConfig>, mappings?: JoypadMap[]);
    /**
     * The main update loop - updates every joypad and passes the reference to the native gamepad.
     */
    update(): void;
}
