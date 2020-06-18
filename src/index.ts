import GamepadManager from './GamepadManager';

const gm = new GamepadManager(1);

gm.start();

gm.gamepads[0].addEventListener('axispress', (x: any, y: any) => {
  console.log('axis press');
  console.log(y);
});
gm.gamepads[0].addEventListener('axisrelease', (x: any, y: any) => {
  console.log('axis release');
  console.log(y);
});

gm.gamepads[0].addEventListener('buttonpress', (x: any, y: any) => {
  console.log('button press');
  console.log(y);
});
gm.gamepads[0].addEventListener('buttonrelease', (x: any, y: any) => {
  console.log('button release');
  console.log(y);
});
gm.gamepads[0].addEventListener('buttonchange', (x: any, y: any) => {
  console.log('button change');
  console.log(y);
});
gm.gamepads[0].addEventListener('axischange', (x: any, y: any) => {
  console.log('axis change');
  console.log(y);
});
