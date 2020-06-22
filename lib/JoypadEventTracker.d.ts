import type { JoypadEventName } from './JoypadEventEmitter';
export default class JoypadEventTracker {
    name: JoypadEventName;
    callbacks: Function[];
    constructor(name: JoypadEventName);
    registerCallback(callback: Function): void;
    unRegisterCallback(callback: Function): void;
}
