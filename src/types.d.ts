import type Joypad from './Joypad';

export interface AxisMapping {
  name: string;
}

export interface ButtonMapping {
  name: string;
  analog?: boolean;
}

export interface GamepadMap {
  ids: string[];
  buttons: ButtonMapping[];
  axes: AxisMapping[];
}

export interface AxisState {
  name: string;
  value: number;
}

export interface ButtonState {
  analog: boolean;
  name: string;
  value: number;
}

export type JoypadEventName = 'connect' |'disconnect' |'buttonpress' |'buttonrelease' | 'buttonchange' | 'axismove';

export type JoypadButtonEvent = {
  button: ButtonState;
  joypad: Joypad;
  nativeButton: GamepadButton;
  nativePad: Gamepad;
};

// no need for native axis - it's just a value
export type JoypadAxisEvent = {
  button: AxisState;
  joypad: Joypad;
  nativePad: Gamepad;
};

export type JoypadEvent = {
  joypad: Joypad;
  nativePad: Gamepad | null;
};

export type JoypadEvents = JoypadButtonEvent | JoypadAxisEvent | JoypadEvent;

export type JoypadButtonEventCallback = (event: JoypadButtonEvent) => void;
export type JoypadAxisEventCallback = (event: JoypadAxisEvent) => void;
export type JoypadEventCallback = (event: JoypadEvent) => void;
