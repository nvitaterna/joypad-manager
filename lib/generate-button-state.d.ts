import { ButtonState, AxisState, JoypadMap } from '@/types';
export default function generateButtonState(id: string, customMappings: JoypadMap[]): {
    axes: AxisState[];
    buttons: ButtonState[];
};
