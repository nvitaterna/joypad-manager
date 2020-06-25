import nintendoSwitch from './nintendo-switch-mappings';
import defaultMapping from './default-mapping';
import xboxoneMapping from './xbox-mappings';

/** The analog stick mapping interface. */
export interface StickMapping {
  /** The mapped name of the stick. */
  name: string;
  axes: {
    /** The index in the native axes array that the x axis maps to. */
    x: number;
    /** The index in the native axes array that the y axis maps to. */
    y: number;
  };
}

/** The button mapping interface. */
export interface ButtonMapping {
  /** The mapped name of the button. */
  name: string;
  /** Whether or not this is an analog button. */
  analog?: boolean;
}

/** A mapping for a joypad. */
export interface JoypadMap {
  /** The ids that this mapping will be used for. */
  ids: string[];
  /** The array of button mappings for the joypad. */
  buttons?: ButtonMapping[];
  /** The array of analog stick mappings for the joypad. */
  sticks?: StickMapping[];
}

const mappings = [
  defaultMapping,
  xboxoneMapping,
  nintendoSwitch,
];

export default mappings;
