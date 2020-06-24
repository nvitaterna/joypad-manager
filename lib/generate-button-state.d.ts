import { JoypadMap } from './mappings';
import type { ButtonState, StickState } from './Joypad';
export default function generateButtonState(id: string, customMappings: JoypadMap[]): {
    mapping: JoypadMap | undefined;
    buttons: ButtonState[];
    sticks: StickState[];
};
