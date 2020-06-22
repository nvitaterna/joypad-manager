import Joypad from './Joypad';
import { JoypadMap, JoypadConfig } from './types';

/**
 * The defaults for the joypad config
 */
const configDefaults: JoypadConfig = {
  analogThreshold: 0.1,
  axisDeadzone: 0.15,
  maxJoypads: 4,
};

/**
 * The JoypadManager class used for managing joypads.
 */
export default class JoypadManager {
  /**
   * The array of joypads.
   */
  readonly joypads: Joypad[] = [];

  /**
   *
   * @param joypadConfig
   * @param mappings custom mappings
   */
  constructor(
    private joypadConfig: Partial<JoypadConfig> = {},
    mappings: JoypadMap[] = [],
  ) {
    const parsedConfig = {
      ...configDefaults,
      ...joypadConfig,
    };
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
