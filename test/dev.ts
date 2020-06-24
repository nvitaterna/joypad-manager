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
joypad.addEventListener('stickmove', (event) => {
  console.log(JSON.stringify({
    stick: event.stick,
    index: event.index,
    native: event.nativeAxes,
  }, null, '\t'));
});
joypad.addEventListener('buttonchange', (event) => {
  console.log(event.button.value, event.button.name, event.index);
});
joypad.addEventListener('buttonpress', (event) => {
  console.log(event.button.value, event.button.name, event.index);
});
joypad.addEventListener('buttonrelease', (event) => {
  console.log(event.button.value, event.button.name, event.index);
});

function update() {
  joypadManager.update();
  requestAnimationFrame(update);
}

update();
