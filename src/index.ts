import JoypadManager from './JoypadManager';

const gm = new JoypadManager(1);

function loop() {
  gm.update();
  requestAnimationFrame(loop);
}

loop();

gm.gamepads[0].addEventListener('connect', () => {
  console.log('connect');
});
gm.gamepads[0].addEventListener('axismove', (event) => {
  console.log(event.button.name);
});
gm.gamepads[0].addEventListener('buttonchange', (event) => {
  console.log(event.button.name);
});
gm.gamepads[0].addEventListener('buttonpress', (event) => {
  console.log(event.button.name);
});
