import mappings, { JoypadMap } from './mappings';
import type { ButtonState, StickState } from './Joypad';

export default function generateButtonState(id: string, customMappings: JoypadMap[]) {
  let gamepadMap = customMappings.concat(mappings).find((mapping) => mapping.ids.some((mappingId) => mappingId.includes(id)));

  if (!gamepadMap) {
    gamepadMap = mappings.find((mapping) => mapping.ids.includes('default'));
  }

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
    mapping!: gamepadMap,
    buttons,
    sticks,
  };
}
