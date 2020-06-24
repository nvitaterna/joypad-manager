import JoypadEventTracker from './JoypadEventTracker';
import * as JOYPAD_EVENTS from './event-names';
import type { StickState, ButtonState } from './generate-button-state';
import type Joypad from './Joypad';

export interface JoypadButtonEvent {
  button: ButtonState;
  joypad: Joypad;
  nativeButton: GamepadButton;
  nativePad: Gamepad;
  index: number;
}

// no need for native axis - it's just a value
export interface JoypadStickEvent {
  stick: StickState;
  joypad: Joypad;
  nativePad: Gamepad;
  nativeAxes: {
    x: number;
    y: number;
  };
  index: [number, number];
}

export interface JoypadEvent {
  joypad: Joypad;
  nativePad: Gamepad | null;
}

export interface JoypadEventMap {
  connect: JoypadEvent;
  disconnect: JoypadEvent;
  buttonpress: JoypadButtonEvent;
  buttonrelease: JoypadButtonEvent;
  buttonchange: JoypadButtonEvent;
  stickmove: JoypadStickEvent;
}

export type JoypadEventName = keyof JoypadEventMap;

function generateEvents() {
  return {
    [JOYPAD_EVENTS.GAMEPAD_CONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_CONNECT),
    [JOYPAD_EVENTS.GAMEPAD_DISCONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_DISCONNECT),
    [JOYPAD_EVENTS.BUTTON_PRESS]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_PRESS),
    [JOYPAD_EVENTS.BUTTON_RELEASE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_RELEASE),
    [JOYPAD_EVENTS.BUTTON_CHANGE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_CHANGE),
    [JOYPAD_EVENTS.STICK_MOVE]: new JoypadEventTracker(JOYPAD_EVENTS.STICK_MOVE),
  } as {[key in JoypadEventName]: JoypadEventTracker};
}

export default class JoypadEventEmitter {
  events = generateEvents();

  dispatchEvent<K extends keyof JoypadEventMap>(eventName: JoypadEventName, event: JoypadEventMap[K]) {
    this.events[eventName].callbacks.forEach((callback) => {
      callback(event);
    });
  }

  addEventListener<K extends keyof JoypadEventMap>(name: K, callback: (event: JoypadEventMap[K]) => void) {
    this.events[name].registerCallback(callback);
  }

  removeEventListener<K extends keyof JoypadEventMap>(name: K, callback: (event: JoypadEventMap[K]) => void) {
    this.events[name].unRegisterCallback(callback);
  }
}
