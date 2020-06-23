import JoypadEventTracker from './JoypadEventTracker';
import * as JOYPAD_EVENTS from './event-names';
function generateEvents() {
    return {
        [JOYPAD_EVENTS.GAMEPAD_CONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_CONNECT),
        [JOYPAD_EVENTS.GAMEPAD_DISCONNECT]: new JoypadEventTracker(JOYPAD_EVENTS.GAMEPAD_DISCONNECT),
        [JOYPAD_EVENTS.BUTTON_PRESS]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_PRESS),
        [JOYPAD_EVENTS.BUTTON_RELEASE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_RELEASE),
        [JOYPAD_EVENTS.BUTTON_CHANGE]: new JoypadEventTracker(JOYPAD_EVENTS.BUTTON_CHANGE),
        [JOYPAD_EVENTS.AXIS_MOVE]: new JoypadEventTracker(JOYPAD_EVENTS.AXIS_MOVE),
    };
}
export default class JoypadEventEmitter {
    constructor() {
        this.events = generateEvents();
    }
    dispatchEvent(eventName, event) {
        this.events[eventName].callbacks.forEach((callback) => {
            callback(event);
        });
    }
    addEventListener(name, callback) {
        this.events[name].registerCallback(callback);
    }
    removeEventListener(name, callback) {
        this.events[name].unRegisterCallback(callback);
    }
}
//# sourceMappingURL=JoypadEventEmitter.js.map