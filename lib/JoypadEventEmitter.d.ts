import JoypadEventTracker from './JoypadEventTracker';
import type { ButtonState, StickState, Joypad } from './Joypad';
export interface JoypadButtonEvent {
    button: ButtonState;
    joypad: Joypad;
    nativeButton: GamepadButton;
    nativePad: Gamepad;
    index: number;
}
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
export declare type JoypadEventName = keyof JoypadEventMap;
export declare class JoypadEventEmitter {
    events: {
        connect: JoypadEventTracker;
        disconnect: JoypadEventTracker;
        buttonpress: JoypadEventTracker;
        buttonrelease: JoypadEventTracker;
        buttonchange: JoypadEventTracker;
        stickmove: JoypadEventTracker;
    };
    dispatchEvent<K extends keyof JoypadEventMap>(eventName: JoypadEventName, event: JoypadEventMap[K]): void;
    addEventListener<K extends keyof JoypadEventMap>(name: K, callback: (event: JoypadEventMap[K]) => void): void;
    removeEventListener<K extends keyof JoypadEventMap>(name: K, callback: (event: JoypadEventMap[K]) => void): void;
}
