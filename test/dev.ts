import JoypadManager from '../src';

const joypadManager = new JoypadManager({
  maxJoypads: 1,
});

const joypad = joypadManager.joypads[0];

(window as any).joypad = joypad;

joypad.addEventListener('connect', (event) => {
  console.log(event.joypad);
});
joypad.addEventListener('disconnect', (event) => {
  console.log(event.joypad);
});
joypad.addEventListener('axismove', (event) => {
  console.log(event.axis.value, event.axis.name);
});
joypad.addEventListener('buttonchange', (event) => {
  console.log(event.button.value, event.button.name);
});
joypad.addEventListener('buttonpress', (event) => {
  console.log(event.button.value, event.button.name);
});
joypad.addEventListener('buttonrelease', (event) => {
  console.log(event.button.value, event.button.name);
});

function update() {
  joypadManager.update();
  requestAnimationFrame(update);
}

update();
