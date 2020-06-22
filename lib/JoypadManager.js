import Joypad from './Joypad';
/**
 * The defaults for the joypad config
 */
const configDefaults = {
    analogThreshold: 0.1,
    axisDeadzone: 0.15,
    maxJoypads: 4,
};
/**
 * The JoypadManager class used for managing joypads.
 */
export default class JoypadManager {
    /**
     *
     * @param joypadConfig
     * @param mappings custom mappings
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
     * The main update loop - update each joypad.
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