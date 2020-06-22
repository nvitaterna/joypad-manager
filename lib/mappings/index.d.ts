export interface AxisMapping {
    name: string;
}
export interface ButtonMapping {
    name: string;
    analog?: boolean;
}
export interface JoypadMap {
    ids: string[];
    buttons?: ButtonMapping[];
    axes?: AxisMapping[];
}
declare const _default: JoypadMap[];
export default _default;
