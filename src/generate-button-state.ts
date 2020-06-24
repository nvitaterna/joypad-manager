import mappings, { JoypadMap } from './mappings';
import type { ButtonState, StickState } from './Joypad';

export default function generateButtonState(id: string, customMappings: JoypadMap[]) {
  const gamepadMap = customMappings.concat(mappings).find((mapping) => mapping.ids.includes(id));

  const buttons: ButtonState[] = (gamepadMap?.buttons || []).map((button) => ({
    value: 0,
    name: button.name,
  }));

  const sticks: StickState[] = (gamepadMap?.sticks || []).map((stick) => ({
    name: stick.name,
    value: {
      x: 0,
      y: 0,
      angle: 0,
    },
  }));

  return {
    mapping: gamepadMap,
    buttons,
    sticks,
  };
}
