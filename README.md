# joypad-manager

[![dependencies Status](https://flat.badgen.net/david/dep/nvitaterna/joypad-manager)](https://david-dm.org/nvitaterna/joypad-manager)
[![npm version](https://flat.badgen.net/npm/v/joypad-manager)](https://www.npmjs.com/package/joypad-manager)

`joypad-manager` is a wrapper for the [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API) that adds events and button mapping.

## Install

joypad-manager is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/). `joypad-manager` can be installed in a project's directory like any other package:

NPM  
`npm i joypad-manager`

Yarn  
`yarn add joypad-manager`

It works in the browser too:
```html
<script src="https://cdn.jsdelivr.net/gh/nvitaterna/joypad-manager/dist/joypad-manager.min.js"></script>
```
## Quick Start

```js
const joypadManager = new JoypadManager();

const joypad = joypadManager.joypads[0];

// place 'joypadManager.update()' at the top of your game's update loop

joypad.addEventListener('buttonpress', (event) => {
  if (event.button.name === 'buttonSouth') {
    // do something!
  }
});
```

## Documentation

This library is fully typed and should support out-of-the-box typings and intellisense when using supported editors (developed using VSCode).

### Setup
```js
const JoypadManager = require('joypad-manager');
```
or
```js
import JoypadManager from 'joypad-manager';
```

In the browser it is globally available on the window object:
```js
window.JoypadManager
```

### Usage

#### Setup
Initiate the [`JoypadManager`](/docs/classes/_joypadmanager_.joypadmanager.md):

```js
const joypadManager = new Joypadmanager();
```
#### Update Loop
Add the `joypadManager`'s update function to the start of your the game's update loop:
```js
...
function update() {
  joypadManager.update();
  ...
}
...
```
Or create a separte loop that will use requestAnimationFrame to process events:
```js
function update() {
  joypadManager.update();
  requestAnimationFrame(update);
}

update();
```
#### Access Joypads

[Joypads](/docs/classes/_joypad_.joypad.md) may be accessed via the `joypadManager.joypads` property:
```js
const joypads = joypadManager.joypads;
const joypad = joypads[0];
const joypadTwo = joypads[1];
...
```
The default number of joypads is 4. It will create the joypad instances even if there is no gamepad connected. The [`joypad.isConnected`](/docs/classes/_joypad_.joypad.md#isconnected) property can be used to check if a joypad is connected:
```js
// after connecting one gamepad to your device:
joypad.isConnected; // true
joypadTwo.isConnected; // false
```

#### Add Event Listeners

Adding event listeners is done through the [`joypad.addEventListener`](/docs/classes/_joypad_.joypad.md#addeventlistener) function. Event listeners may be added to both connected and disconnected joypads.
```js
joypad.addEventListener('connect', (event) => {
  // do something with this joypad on connect
})
```
All [events](/docs/interfaces/_joypadeventemitter_.joypadevent.md) include the following properties:

* `joypad` - the Joypad instance.  
* `nativePad` - the native Gamepad instance.

##### Button Events

There are three [button events](docs/interfaces/_joypadeventemitter_.joypadbuttonevent.md):

* `buttonpress` - dispatched when a button is pressed.  
* `buttonrelease` - dispatched when a button is released.
* `buttonchange` - dispatched when the value of an analog button is changed. `buttonpress` and `buttonrelease` are still dispatched when analog values change to 1 or 0.

```js
joypad.addEventListener('buttonpress', (event) => {
  // do something on button press
})
```
All button events include the previously mentioned `joypad` and `nativePad` properties as well as the following:

* `button`  - the current button state, includes the following properties:  
  * `name` - the name of the button - this can be changed via custom mappings.
  * `value` - the value of the mapped button
* `index` - the index of the button in the native gamepad's buttons array.
* `nativeButton` - the native gamepad button object

#### Stick Events
There is one [stick event](docs/interfaces/_joypadeventemitter_.joypadstickevent.md): 
* `stickmove` - dispatched when one of the axes for a stick is changed.
```js
joypad.addEventListener('stickmove', (event) => {
  // do something on button press
})
```
All stick events include the previously mentioned `joypad` and `nativePad` properties as well as the following:

* `stick`  - the current stick state, includes the following properties:  
  * `name` - the name of the stick - this can be changed via custom mappings.
  * `value` - the values of the stick axes, as well as angle:
    * `x` - this will be zero if less than the configured axis deadzone
    * `y` - this will be zero if less than the configured axis deadzone
    * `angle` - in radians
* `index` - the indexes of the axes in the native gamepad's axes array.
* `nativeAxes` - the native values of the x and y axes
  * `x`
  * `y`

#### Vibration
As of now - [vibration](/docs/classes/_joypad_.joypad.md#vibrate) is only available in Chrome:
```js
joypad.vibrate(params)
```
The vibration paramaters are taken from the native Chrome paramaters, and will likely be changed in the future as other browsers add support:
* `startDelay` - delay in milliseconds before starting the vibration effect.
* `duration` - duration in milliseconds to play the effect.
* `weakMagnitude` - the magnitude of the weak motor between 0 and 1.
* `strongMagnitude` - the magnitude of the strong motor between 0 and 1.

A vibration may be stopped prematurely by calling [`joypad.stopVibrate()`](/docs/classes/_joypad_.joypad.md#stopvibrate).
