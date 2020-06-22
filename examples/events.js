// example of basic events
const JoypadManager = require('../dist/joypad-manager');

const joypadManager = new JoypadManager({});

const joypad = joypadManager.joypads[0];

joypad.addEventListener('connect', (event) => {
  // all events contain these two properties
  // this is the joypad
  console.log(event.joypad);
  // this is the native Gamepad reference
  // may be null if the controller has not been connected yet
  console.log(event.nativePad);
});

joypad.addEventListener('disconnect', (event) => {
  // this is the joypad
  console.log(event.joypad);
  // this is the native Gamepad reference
  // may be null if the controller has not been connected yet
  console.log(event.nativePad);
});

joypad.addEventListener('axismove', (event) => {
  /* AXIS STATE
  button: {
    name: string;
    value: number;
  }
  */
  console.log(event.button);
  console.log(event.joypad);
  console.log(event.nativePad);
});

joypad.addEventListener('buttonchange', (event) => {
  // all button events have the same structure
  /* BUTTON STATE
  button: {
    analog: boolean;
    name: string;
    value: number;
  }
  */
  console.log(event.button);
  // the native button reference
  console.log(event.nativeButton);
  console.log(event.joypad);
  console.log(event.nativePad);
});

joypad.addEventListener('buttonpress', (event) => {
  console.log(event);
  console.log(event.joypad);
  console.log(event.nativePad);
});

joypad.addEventListener('buttonrelease', (event) => {
  console.log(event);
  console.log(event.joypad);
  console.log(event.nativePad);
});
