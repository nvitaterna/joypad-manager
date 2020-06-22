const JoypadManager = require('../dist/joypad-manager');

// you may provide a custom mapping
// the array index maps to the native button index
const mapping = {
  ids: [
    'default',
  ],
  buttons: [
    {
      name: 'A',
    },
    {
      name: 'B',
    },
    {
      name: 'X',
    },
    {
      name: 'Y',
    },
    {
      name: 'L1',
    },
    {
      name: 'R1',
    },
    {
      name: 'L2',
      analog: true,
    },
    {
      name: 'R2',
      analog: true,
    },
    {
      name: 'SELECT',
    },
    {
      name: 'START',
    },
    {
      name: 'L3',
    },
    {
      name: 'R3',
    },
    {
      name: 'UP',
    },
    {
      name: 'DOWN',
    },
    {
      name: 'LEFT',
    },
    {
      name: 'RIGHT',
    },
  ],
  axes: [
    {
      name: 'leftStickX',
    },
    {
      name: 'leftStickY',
    },
    {
      name: 'rightStickX',
    },
    {
      name: 'rightStickY',
    },
  ],
};

const joypadManager = new JoypadManager({
  maxJoypads: 1,
  analogThreshold: 0.1,
  axisDeadzone: 0.25,
}, [mapping]);

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
  event.axis = {
    name: string;
    value: number;
  }
  */
  console.log(event.axis);
  console.log(event.joypad);
  console.log(event.nativePad);
});

joypad.addEventListener('buttonchange', (event) => {
  // all button events have the same structure
  /* BUTTON STATE
  event.button = {
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

// this would normally be your game event loop
function update() {
  joypadManager.update();
  requestAnimationFrame(update);
}

update();
