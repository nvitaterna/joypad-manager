import Joypad from './Joypad';
export default class JoypadManager {
    /**
     * Initiate the JoypadManager
     * @param joypadConfig Optional Joypad configuration
     * @param mappings Custom list of mappings
     */
    constructor({ axisDeadzone = 0.15, maxJoypads = 4, } = {
        axisDeadzone: 0.15,
        maxJoypads: 4,
    }, mappings = []) {
        /**
         * The array of joypads.
         */
        this.joypads = [];
        for (let i = 0; i < maxJoypads; i += 1) {
            this.joypads[i] = new Joypad(i, { axisDeadzone, maxJoypads }, mappings);
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