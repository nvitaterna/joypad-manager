import JoypadManager from '../src';

const joypadManager = new JoypadManager(1);

const joypad = joypadManager.joypads[0];

joypad.addEventListener('connect', (event) => {
  console.log(event);
});
joypad.addEventListener('disconnect', (event) => {
  console.log(event);
});
joypad.addEventListener('axismove', (event) => {
  console.log(event);
});
joypad.addEventListener('buttonchange', (event) => {
  console.log(event);
});
joypad.addEventListener('buttonpress', (event) => {
  console.log(event);
});
joypad.addEventListener('buttonrelease', (event) => {
  console.log(event);
});

function update() {
  joypadManager.update();
  requestAnimationFrame(update);
}

update();
