import gamepadMap from './gamepadMap';

export interface ButtonState {
  type: 'button' | 'axis';
  pressed: boolean;
  touched: boolean;
  value: number;
  alias: string;
}

export default function generateButtonState() {
  const buttons = gamepadMap.buttons.map((button) => ({
    type: button.analog ? 'analog' : 'digital',
    pressed: false,
    touched: false,
    value: 0,
    name: button.name,
  }));

  const axes = gamepadMap.axes.map((axis) => ({
    type: 'analog',
    value: 0,
    name: axis.name,
  }));

  return {
    axes,
    buttons,
  };
}
