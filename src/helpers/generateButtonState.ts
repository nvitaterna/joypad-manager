import { ButtonState, AxisState } from '@/types';
import mappings from '../mappings';

export default function generateButtonState(id: string) {
  const gamepadMap = mappings.find((mapping) => mapping.ids.includes(id)) || mappings[0];
  const buttons = gamepadMap.buttons.map((button) => ({
    analog: !!button.analog,
    value: 0,
    name: button.name,
  } as ButtonState));

  const axes = gamepadMap.axes.map((axis) => ({
    value: 0,
    name: axis.name,
  } as AxisState));

  return {
    axes,
    buttons,
  };
}
