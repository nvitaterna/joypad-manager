import { JoypadMap } from './mappings';
import type { ButtonState, AxisState } from './Joypad';
export default function generateButtonState(id: string, customMappings: JoypadMap[]): {
    axes: AxisState[];
    buttons: ButtonState[];
};
