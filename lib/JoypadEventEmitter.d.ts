import JoypadEventTracker from './JoypadEventTracker';
import type Joypad from './Joypad';
import type { ButtonState, AxisState } from './Joypad';
export declare type JoypadButtonEvent = {
    button: ButtonState;
    joypad: Joypad;
    nativeButton: GamepadButton;
    nativePad: Gamepad;
    index: number;
};
export declare type JoypadAxisEvent = {
    axis: AxisState;
    joypad: Joypad;
    nativePad: Gamepad;
    index: number;
};
export declare type JoypadEvent = {
    joypad: Joypad;
    nativePad: Gamepad | null;
};
export interface JoypadEventMap {
    connect: JoypadEvent;
    disconnect: JoypadEvent;
    buttonpress: JoypadButtonEvent;
    buttonrelease: JoypadButtonEvent;
    buttonchange: JoypadButtonEvent;
    axismove: JoypadAxisEvent;
}
export declare type JoypadEventName = keyof JoypadEventMap;
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
