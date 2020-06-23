# joypad-manager

[![dependencies Status](https://flat.badgen.net/david/dep/nvitaterna/joypad-manager)](https://david-dm.org/nvitaterna/joypad-manager)
[![npm version](https://flat.badgen.net/npm/v/joypad-manager)](https://www.npmjs.com/package/joypad-manager)

This is a wrapper for the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) that adds events and button mapping.

## Install

joypad-manager is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/). You can install joypad-manager in your project's directory like any other package:

NPM  
`npm i joypad-manager`

Yarn  
`yarn add joypad-manager`

Or you can use it in the browser with the following downloads:

#### Minified
[joypad.min.js](https://cdn.jsdelivr.net/npm/joypad-manager/dist/joypad-manager.min.js)

#### Uncompressed
[joypad.js](https://cdn.jsdelivr.net/npm/joypad-manager/dist/joypad-manager.js)


## Documentation

### Setup
```js
const JoypadManager = require('joypad-manager');
```
or
```js
import JoypadManager from 'joypad-manager';
```
or
```html
<script src="joypad-manager.js"></script>
```

### Usage

#### Setup and Configuration

```js
const config = {
  // The minimum value change needed to emit an axis change or button change event.
  analogThreshold: 0.2,
  // The axis deadzone - any values below this will return 0.
  axisDeadzone: 0.15,
  // The max number of joypads to loop through. If you connect more joypads than this number, they will not be processed by this plugin.
  maxJoypads: 2
}

const joypadManager = new Joypadmanager(config)

// then in your game update loop, call joypadManager.update and it will begin polling for events every game update
function gameUpdateLoop() {
  // ...
  joypadManager.update();
  // ...
}
```

#### Joypads

```js
// this is how you can access the array of joypads.
const joypads = joypadManager.joypads;

// the index of these joypads maps to the index of it's native gamepad
const joypadOne = joypads[0];
```
#### Events
```js
// this is fired when a gamepad is recognized by the plugin or when controller is plugged in after being unplugged.
joypadOne.addEventListener('connect', (event) => {
  // the joypad instance
  event.joypad == joypadOne;

  // the reference to the native gamepad
  event.nativePad == navigator.getGamepads()[event.joypad.index];
});

// this is fired when a gamepad is unplugged. The event has the same parameters as the connect event.
joypadOne.addEventListener('disconnect', (event) => { });

// this is fired whenever an axis value changes more than the axis threshold
joypadOne.addEventListener('axismove', (event) => {
  // the axis state
  event.axis == {
    // the mapped name of the axis
    name: 'leftStick',
    // the value of the axis - will be 0 if below the axis deadzone
    value: 0.123176237
  }

  // the native axis information
  event.nativeAxis == {
    // the value as reported by the native gamepad api
    value: 0.123176237
  }

  // the native index of the axis
  event.index == 0;

  event.joypad == joypadOne
  event.nativePad == navigator.getGamepads()[event.joypad.index];
});

// this is fired when a putton is pressed
joypadOne.addEventListener('buttonpress', (event) => {
  // the button state
  event.button == {
    // whether or not this is an analog button
    analog: false,
    // the mapped name of the button
    name: 'buttonEast',
    // the current button value
    value: 1,
  }

  // the native button
  event.nativeButton == {
    pressed: 1,
    touched: 1,
    value: 1,
  }

  // the native index of the axis
  event.index == 1

  event.joypad == joypadOne
  event.nativePad == navigator.getGamepads()[event.joypad.index];
});

// this is fired when a button is released - same event as the buttonpress event
joypadOne.addEventListener('buttonrelease', (event) => {});

// this is fired when an analog button is changed - same event as the buttonpress event
joypadOne.addEventListener('buttonpress', (event) => {});
```

#### Vibration
As of now - vibration is only available in Chrome.
```js
const params = {
  // delay in milliseconds before starting the vibration
  startDelay: 0;
  // duration in milliseconds
  duration: number;
  // the magnitude of the weak motor 
  weakMagnitude: number;
  // the magnitude of the strong motor
  strongMagnitude: number;
}

joypadOne.vibrate(params).then(result => {
  result == 'invalid-parameter' || 'complete' || 'preempted'
})

// stop any current vibrations - this resolve the current vibration with 'preempted'
joypadOne.stopVibrate().then(result => {
  result == 'complete'
})
```
