export interface StickMapping {
    name: string;
    axes: {
        x: number;
        y: number;
    };
}
export interface ButtonMapping {
    name: string;
    analog?: boolean;
}
export interface JoypadMap {
    ids: string[];
    buttons?: ButtonMapping[];
    sticks?: StickMapping[];
}
declare const mappings: JoypadMap[];
export default mappings;
