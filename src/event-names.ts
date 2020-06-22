import type { JoypadEventName } from './JoypadEventEmitter';

const GAMEPAD_CONNECT = 'connect' as JoypadEventName;
const GAMEPAD_DISCONNECT = 'disconnect' as JoypadEventName;
const BUTTON_PRESS = 'buttonpress' as JoypadEventName;
const BUTTON_RELEASE = 'buttonrelease' as JoypadEventName;
const BUTTON_CHANGE = 'buttonchange' as JoypadEventName;
const AXIS_MOVE = 'axismove' as JoypadEventName;

export {
  GAMEPAD_CONNECT,
  GAMEPAD_DISCONNECT,
  BUTTON_PRESS,
  BUTTON_RELEASE,
  AXIS_MOVE,
  BUTTON_CHANGE,
};
