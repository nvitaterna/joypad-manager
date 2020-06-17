import { /* axisMap, */ buttonMap } from './gamepadMap';

export interface ButtonState {
  type: 'button' | 'axis';
  pressed: boolean;
  touched: boolean;
  value: number;
  alias: string;
}

export default function generateButtonState() {
  const bs = buttonMap.map((button) => ({
    type: 'button',
    pressed: false,
    touched: false,
    value: 0,
    alias: button,
  } as ButtonState));
  return bs;
}
