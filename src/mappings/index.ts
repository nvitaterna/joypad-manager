import { JoypadMap } from '@/types';
import nintendoSwitch from './nintendo-switch';
import defaultMapping from './default-mapping';
import xboxoneMapping from './xbox-mapping';

export default [
  defaultMapping,
  xboxoneMapping,
  nintendoSwitch,
] as JoypadMap[];
