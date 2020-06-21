import JoypadManager from './JoypadManager';
import { JoypadButtonEvent } from './types';

const gm = new JoypadManager(1);

function loop() {
  gm.update();
  requestAnimationFrame(loop);
}

loop();

gm.gamepads[0].addEventListener('buttonchange', (event: JoypadButtonEvent) => {
  console.log(event);
});
