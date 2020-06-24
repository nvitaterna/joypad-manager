import nintendoSwitch from './nintendo-switch';
import defaultMapping from './default-mapping';
import xboxoneMapping from './xbox-mapping';

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

const mappings = [
  defaultMapping,
  xboxoneMapping,
  nintendoSwitch,
];

export default mappings;
