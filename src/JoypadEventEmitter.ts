import JoypadEventTracker, * as JOYPAD_EVENTS from './JoypadEventTracker';
import {
  JoypadEventName, JoypadButtonEventCallback, JoypadAxisEventCallback, JoypadEventCallback, JoypadEvents,
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

  dispatchEvent(eventName: JoypadEventName, event: JoypadEvents) {
    this.events[eventName].callbacks.forEach((callback) => {
      callback(event);
    });
  }

  addEventListener(name: JoypadEventName, callback: JoypadButtonEventCallback | JoypadAxisEventCallback | JoypadEventCallback) {
    this.events[name].registerCallback(callback);
  }

  removeEventListener(name: JoypadEventName, callback: JoypadButtonEventCallback | JoypadAxisEventCallback | JoypadEventCallback) {
    this.events[name].unRegisterCallback(callback);
  }
}
