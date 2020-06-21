import JoypadEventTracker from './JoypadEventTracker';
import * as JOYPAD_EVENTS from './eventNames';
import {
  JoypadEventName, JoypadEventMap,
} from './types';

const events = {
  [JOYPAD_EVENTS.GAMEPAD_CONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_CONNECT),
  [JOYPAD_EVENTS.GAMEPAD_DISCONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_DISCONNECT),
  [JOYPAD_EVENTS.BUTTON_PRESS]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_PRESS),
  [JOYPAD_EVENTS.BUTTON_RELEASE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_RELEASE),
  [JOYPAD_EVENTS.BUTTON_CHANGE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_CHANGE),
  [JOYPAD_EVENTS.AXIS_MOVE]: new JoypadEventTracker(JOYPAD_EVENTS.AXIS_MOVE),
} as {[key in JoypadEventName]: JoypadEventTracker};

export default class JoypadEventEmitter {
  events = events;

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
