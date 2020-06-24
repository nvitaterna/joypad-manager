import type { JoypadEventName } from './JoypadEventEmitter';

const GAMEPAD_CONNECT: JoypadEventName = 'connect';
const GAMEPAD_DISCONNECT: JoypadEventName = 'disconnect';
const BUTTON_PRESS: JoypadEventName = 'buttonpress';
const BUTTON_RELEASE: JoypadEventName = 'buttonrelease';
const BUTTON_CHANGE: JoypadEventName = 'buttonchange';
const STICK_MOVE: JoypadEventName = 'stickmove';

export {
  GAMEPAD_CONNECT,
  GAMEPAD_DISCONNECT,
  BUTTON_PRESS,
  BUTTON_RELEASE,
  STICK_MOVE,
  BUTTON_CHANGE,
};
