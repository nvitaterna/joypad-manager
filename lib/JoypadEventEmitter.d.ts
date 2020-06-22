import JoypadEventTracker from './JoypadEventTracker';
import { JoypadEventName, JoypadEventMap } from './types';
export default class JoypadEventEmitter {
    events: {
        connect: JoypadEventTracker;
        disconnect: JoypadEventTracker;
        buttonpress: JoypadEventTracker;
        buttonrelease: JoypadEventTracker;
        buttonchange: JoypadEventTracker;
        axismove: JoypadEventTracker;
    };
    dispatchEvent<K extends keyof JoypadEventMap>(eventName: JoypadEventName, event: JoypadEventMap[K]): void;
    addEventListener<K extends keyof JoypadEventMap>(name: K, callback: (event: JoypadEventMap[K]) => void): void;
    removeEventListener<K extends keyof JoypadEventMap>(name: K, callback: (event: JoypadEventMap[K]) => void): void;
}
