import nintendoSwitch from './nintendo-switch';
import defaultMapping from './default-mapping';
import xboxoneMapping from './xbox-mapping';

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

export default [
  defaultMapping,
  xboxoneMapping,
  nintendoSwitch,
] as JoypadMap[];
