import { JoypadMap } from './mappings';
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
export default function generateButtonState(id: string, customMappings: JoypadMap[]): {
    mapping: JoypadMap | undefined;
    buttons: ButtonState[];
    sticks: StickState[];
};
