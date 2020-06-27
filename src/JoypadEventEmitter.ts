/* eslint-disable import/no-duplicates */
import JoypadEventTracker from './JoypadEventTracker';
import * as JOYPAD_EVENTS from './event-names';
import type { ButtonState, StickState, Joypad } from './Joypad';

/** The base joypad event - used for connect/disconnect events. */
export interface JoypadEvent {
  joypad: Joypad;
  nativePad: Gamepad | null;
}

export interface JoypadButtonEvent extends JoypadEvent {
  button: ButtonState;
  nativeButton: GamepadButton;
  index: number;
  nativePad: Gamepad;
}

// no need for native axis - it's just a value
export interface JoypadStickEvent extends JoypadEvent {
  stick: StickState;
  nativeAxes: {
    x: number;
    y: number;
  };
  index: [number, number];
  nativePad: Gamepad;
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
  } as { [key in JoypadEventName]: JoypadEventTracker };
}

export class JoypadEventEmitter {
  private events = generateEvents();

  protected dispatchEvent<K extends keyof JoypadEventMap>(
    eventName: JoypadEventName,
    event: JoypadEventMap[K],
  ) {
    this.events[eventName].callbacks.forEach((callback) => {
      callback(event);
    });
  }

  /**
   * Add an event listener to this Joypad.
   * @param name The event name.
   * @param callback The event callback to add to this event.
   */
  addEventListener<K extends keyof JoypadEventMap>(
    name: K,
    callback: (event: JoypadEventMap[K]) => void,
  ) {
    this.events[name].registerCallback(callback);
  }

  /**
   * Remove an event listener from this Joypad.
   * @param name The event name.
   * @param callback The event callback to remove from this event.
   */
  removeEventListener<K extends keyof JoypadEventMap>(
    name: K,
    callback: (event: JoypadEventMap[K]) => void,
  ) {
    this.events[name].unRegisterCallback(callback);
  }

  /**
   * Remove all listeners from this Joypad.
   */
  clearEvents() {
    Object.values(this.events).forEach((event) => {
      event.callbacks = [];
    });
  }
}
