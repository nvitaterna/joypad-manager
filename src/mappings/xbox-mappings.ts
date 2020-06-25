import defaultMapping from './default-mapping';
import type { JoypadMap } from '.';

export default {
  ids: ['Xbox 360 Controller (XInput STANDARD GAMEPAD)', 'xinput'],
  buttons: defaultMapping.buttons,
  sticks: defaultMapping.sticks,
} as JoypadMap;
