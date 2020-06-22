# joypad-manager

[![dependencies Status](https://flat.badgen.net/david/dep/nvitaterna/joypad-manager)](https://david-dm.org/nvitaterna/joypad-manager)
[![npm version](https://flat.badgen.net/npm/v/joypad-manager)](https://www.npmjs.com/package/joypad-manager)

This is a wrapper for the HTML5 Gamepad API that adds event and button mapping.

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


## Usage

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

### JoypadManager

```js
new Joypadmanager(config, mappings)
```
