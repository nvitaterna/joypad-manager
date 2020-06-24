/* eslint-disable import/no-duplicates */
import JoypadEventTracker from './JoypadEventTracker';
import * as JOYPAD_EVENTS from './event-names';
function generateEvents() {
    return {
        [JOYPAD_EVENTS.GAMEPAD_CONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_CONNECT),
        [JOYPAD_EVENTS.GAMEPAD_DISCONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_DISCONNECT),
        [JOYPAD_EVENTS.BUTTON_PRESS]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_PRESS),
        [JOYPAD_EVENTS.BUTTON_RELEASE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_RELEASE),
        [JOYPAD_EVENTS.BUTTON_CHANGE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_CHANGE),
        [JOYPAD_EVENTS.STICK_MOVE]: new JoypadEventTracker(JOYPAD_EVENTS.STICK_MOVE),
    };
}
export class JoypadEventEmitter {
    constructor() {
        this.events = generateEvents();
    }
    dispatchEvent(eventName, event) {
        this.events[eventName].callbacks.forEach((callback) => {
            callback(event);
        });
    }
    /**
     * Add an event listener from this Joypad.
     * @param name The event name.
     * @param callback The event callback to add to this event.
     */
    addEventListener(name, callback) {
        this.events[name].registerCallback(callback);
    }
    /**
     * Remove an event listener from this Joypad.
     * @param name The event name.
     * @param callback The event callback to remove from this event.
     */
    removeEventListener(name, callback) {
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
//# sourceMappingURL=JoypadEventEmitter.js.map