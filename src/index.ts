import GamepadManager from './GamepadManager';

const gm = new GamepadManager(1);

gm.start();

gm.gamepads[0].addEventListener('buttonpress', (x: any, y: any) => {
  console.log(y);
});
