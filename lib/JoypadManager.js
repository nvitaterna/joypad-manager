import Joypad from './Joypad';
/**
 * The defaults for the joypad config
 */
const configDefaults = {
    analogThreshold: 0.1,
    axisDeadzone: 0.15,
    maxJoypads: 4,
};
export default class JoypadManager {
    /**
     * Initiate the JoypadManager
     * @param joypadConfig Optional Joypad configuration
     * @param mappings Custom list of mappings
     */
    constructor(joypadConfig = {}, mappings = []) {
        /**
         * The array of joypads.
         */
        this.joypads = [];
        const parsedConfig = Object.assign(Object.assign({}, configDefaults), joypadConfig);
        for (let i = 0; i < parsedConfig.maxJoypads; i += 1) {
            this.joypads[i] = new Joypad(i, parsedConfig, mappings);
        }
    }
    /**
     * The main update loop - updates every joypad and passes the reference to the native gamepad.
     */
    update() {
        const nativePads = navigator.getGamepads();
        this.joypads.forEach((joypad, index) => {
            const nativePad = nativePads[index];
            joypad.update(nativePad);
        });
    }
}
//# sourceMappingURL=JoypadManager.js.map