import { JoypadMap } from '@/types';
import joyconMapping from './joycon-mapping';
import defaultMapping from './default-mapping';
import xboxoneMapping from './xbox-mapping';

export default [
  defaultMapping,
  xboxoneMapping,
  joyconMapping,
] as JoypadMap[];
