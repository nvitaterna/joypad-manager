import Joypad from './Joypad';
import { JoypadMap } from './mappings';

export interface JoypadConfig {
  /**
   * The max number of joypads you plan on using.
   * The JoypadManager will loop through this many Joypads each update cycle.
   */
  maxJoypads: number;
  /**
   * The threshold for analog movement.
   */
  analogThreshold: number;
  /**
   * The analog stick deadzone
   */
  axisDeadzone: number;
}

/**
 * The defaults for the joypad config
 */
const configDefaults: JoypadConfig = {
  analogThreshold: 0.1,
  axisDeadzone: 0.15,
  maxJoypads: 4,
};

export default class JoypadManager {
  /**
   * The array of joypads.
   */
  readonly joypads: Joypad[] = [];

  /**
   * Initiate the JoypadManager
   * @param joypadConfig Optional Joypad configuration
   * @param mappings Custom list of mappings
   */
  constructor(
    joypadConfig: Partial<JoypadConfig> = {},
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
