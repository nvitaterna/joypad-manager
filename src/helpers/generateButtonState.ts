import mappings from '../mappings';

export default function generateButtonState(id: string) {
  const gamepadMap = mappings.find((mapping) => mapping.id === id) || mappings[0];
  const buttons = gamepadMap.buttons.map((button) => ({
    analog: button.analog,
    pressed: false,
    touched: false,
    value: 0,
    name: button.name,
  } as ButtonState));

  const axes = gamepadMap.axes.map((axis) => ({
    type: 'analog',
    value: 0,
    name: axis.name,
  } as AxisState));

  return {
    axes,
    buttons,
  };
}
