import mappings, { JoypadMap } from './mappings';

export interface StickState {
  name: string;
  value: {
    x: number;
    y: number;
    angle: number;
  };
}

export interface ButtonState {
  name: string;
  value: number;
}

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
