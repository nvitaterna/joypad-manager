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
    {
      analogThreshold = 0.1,
      axisDeadzone = 0.15,
      maxJoypads = 4,
    }: Partial<JoypadConfig>,
    mappings: JoypadMap[] = [],
  ) {
    for (let i = 0; i < maxJoypads; i += 1) {
      this.joypads[i] = new Joypad(i, { analogThreshold, axisDeadzone, maxJoypads }, mappings);
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
