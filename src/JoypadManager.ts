import Joypad from './Joypad';
import { JoypadMap, JoypadConfig } from './types';

const DEFAULT_ANALOG_CHANGE_THRESHOLD = 0.1;
const DEFAULT_AXIS_DEADZONE = 0.3;

export default class JoypadManager {
  readonly joypads: Joypad[] = [];

  constructor(
    maxJoypads = 4,
    mappings: JoypadMap[] = [],
    public joypadConfig: JoypadConfig = {
      analogThreshold: DEFAULT_ANALOG_CHANGE_THRESHOLD,
      axisDeadzone: DEFAULT_AXIS_DEADZONE,
    },
  ) {
    for (let i = 0; i < maxJoypads; i += 1) {
      this.joypads[i] = new Joypad(i, mappings, joypadConfig);
    }
  }

  update() {
    const nativePads = navigator.getGamepads();
    this.joypads.forEach((joypad, index) => {
      const nativePad = nativePads[index];
      joypad.update(nativePad);
    });
  }
}
