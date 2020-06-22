import Joypad from './Joypad';
import { JoypadMap } from './mappings';
export interface JoypadConfig {
    maxJoypads: number;
    analogThreshold: number;
    axisDeadzone: number;
}
/**
 * The JoypadManager class used for managing joypads.
 */
export default class JoypadManager {
    /**
     * The array of joypads.
     */
    readonly joypads: Joypad[];
    /**
     *
     * @param joypadConfig
     * @param mappings custom mappings
     */
    constructor(joypadConfig?: Partial<JoypadConfig>, mappings?: JoypadMap[]);
    /**
     * The main update loop - update each joypad.
     */
    update(): void;
}
