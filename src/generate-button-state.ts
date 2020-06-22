import mappings, { JoypadMap } from '@/mappings';
import type { ButtonState, AxisState } from './Joypad';

export default function generateButtonState(id: string, customMappings: JoypadMap[]) {
  const gamepadMap = mappings.concat(customMappings).find((mapping) => mapping.ids.includes(id)) || mappings[0];

  const buttons = (gamepadMap.buttons || []).map((button) => ({
    analog: !!button.analog,
    value: 0,
    name: button.name,
  } as ButtonState));

  const axes = (gamepadMap.axes || []).map((axis) => ({
    value: 0,
    name: axis.name,
  } as AxisState));

  return {
    axes,
    buttons,
  };
}
