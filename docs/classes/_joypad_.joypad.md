[joypad-manager](../README.md) › ["Joypad"](../modules/_joypad_.md) › [Joypad](_joypad_.joypad.md)

# Class: Joypad

The Joypad class that is used to create joypads in the [`JoypadManager`](_joypadmanager_.joypadmanager.md).

## Hierarchy

* [JoypadEventEmitter](_joypadeventemitter_.joypadeventemitter.md)

  ↳ **Joypad**

## Index

### Constructors

* [constructor](_joypad_.joypad.md#constructor)

### Properties

* [index](_joypad_.joypad.md#readonly-index)

### Accessors

* [buttons](_joypad_.joypad.md#buttons)
* [isConnected](_joypad_.joypad.md#isconnected)
* [mapping](_joypad_.joypad.md#mapping)
* [sticks](_joypad_.joypad.md#sticks)

### Methods

* [addEventListener](_joypad_.joypad.md#addeventlistener)
* [clearEvents](_joypad_.joypad.md#clearevents)
* [removeEventListener](_joypad_.joypad.md#removeeventlistener)
* [stopVibrate](_joypad_.joypad.md#stopvibrate)
* [update](_joypad_.joypad.md#update)
* [vibrate](_joypad_.joypad.md#vibrate)

## Constructors

###  constructor

\+ **new Joypad**(`index`: number, `joypadConfig`: [JoypadConfig](../interfaces/_joypadmanager_.joypadconfig.md), `mappings`: [JoypadMap](../interfaces/_mappings_index_.joypadmap.md)[]): *[Joypad](_joypad_.joypad.md)*

*Defined in [Joypad.ts:101](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L101)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`index` | number | The gamepad index in the [`JoypadManager.joypads`](_joypadmanager_.joypadmanager.md#readonly-joypads) array. |
`joypadConfig` | [JoypadConfig](../interfaces/_joypadmanager_.joypadconfig.md) | The joypad configuration. |
`mappings` | [JoypadMap](../interfaces/_mappings_index_.joypadmap.md)[] | Custom gamepad button mappings.  |

**Returns:** *[Joypad](_joypad_.joypad.md)*

## Properties

### `Readonly` index

• **index**: *number*

*Defined in [Joypad.ts:109](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L109)*

The gamepad index in the [`JoypadManager.joypads`](_joypadmanager_.joypadmanager.md#readonly-joypads) array.

## Accessors

###  buttons

• **get buttons**(): *object*

*Defined in [Joypad.ts:119](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L119)*

The key-value mappings of the joypad buttons.

**Returns:** *object*

* \[ **key**: *string*\]: [ButtonState](../interfaces/_joypad_.buttonstate.md)

___

###  isConnected

• **get isConnected**(): *boolean*

*Defined in [Joypad.ts:159](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L159)*

Is the controller connected? Determined by checking if this is attached to a native gamepad AND if that native gamepad is connected.

**Returns:** *boolean*

___

###  mapping

• **get mapping**(): *undefined | [JoypadMap](../interfaces/_mappings_index_.joypadmap.md)*

*Defined in [Joypad.ts:141](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L141)*

The current mapping this gamepad is using.

**Returns:** *undefined | [JoypadMap](../interfaces/_mappings_index_.joypadmap.md)*

___

###  sticks

• **get sticks**(): *object*

*Defined in [Joypad.ts:130](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L130)*

The key-value mappings of the joypad sticks.

**Returns:** *object*

* \[ **key**: *string*\]: [StickState](../interfaces/_joypad_.stickstate.md)

## Methods

###  addEventListener

▸ **addEventListener**‹**K**›(`name`: K, `callback`: function): *void*

*Inherited from [JoypadEventEmitter](_joypadeventemitter_.joypadeventemitter.md).[addEventListener](_joypadeventemitter_.joypadeventemitter.md#addeventlistener)*

*Defined in [JoypadEventEmitter.ts:66](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/JoypadEventEmitter.ts#L66)*

Add an event listener to this Joypad.

**Type parameters:**

▪ **K**: *keyof JoypadEventMap*

**Parameters:**

▪ **name**: *K*

The event name.

▪ **callback**: *function*

The event callback to add to this event.

▸ (`event`: JoypadEventMap[K]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | JoypadEventMap[K] |

**Returns:** *void*

___

###  clearEvents

▸ **clearEvents**(): *void*

*Inherited from [JoypadEventEmitter](_joypadeventemitter_.joypadeventemitter.md).[clearEvents](_joypadeventemitter_.joypadeventemitter.md#clearevents)*

*Defined in [JoypadEventEmitter.ts:82](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/JoypadEventEmitter.ts#L82)*

Remove all listeners from this Joypad.

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**‹**K**›(`name`: K, `callback`: function): *void*

*Inherited from [JoypadEventEmitter](_joypadeventemitter_.joypadeventemitter.md).[removeEventListener](_joypadeventemitter_.joypadeventemitter.md#removeeventlistener)*

*Defined in [JoypadEventEmitter.ts:75](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/JoypadEventEmitter.ts#L75)*

Remove an event listener from this Joypad.

**Type parameters:**

▪ **K**: *keyof JoypadEventMap*

**Parameters:**

▪ **name**: *K*

The event name.

▪ **callback**: *function*

The event callback to remove from this event.

▸ (`event`: JoypadEventMap[K]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | JoypadEventMap[K] |

**Returns:** *void*

___

###  stopVibrate

▸ **stopVibrate**(): *undefined | Promise‹"complete"›*

*Defined in [Joypad.ts:379](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L379)*

Stop any current vibrations.

**Returns:** *undefined | Promise‹"complete"›*

___

###  update

▸ **update**(`nativePad`: Gamepad | null): *void*

*Defined in [Joypad.ts:194](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L194)*

The main update loop function

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`nativePad` | Gamepad &#124; null | the native HTML5 Gamepad object  |

**Returns:** *void*

___

###  vibrate

▸ **vibrate**(`vibrationParameters`: Partial‹[VibrationParameters](../interfaces/_joypad_.vibrationparameters.md)›): *Promise‹undefined | "invalid-parameter" | "complete" | "preempted"›*

*Defined in [Joypad.ts:356](https://github.com/nvitaterna/joypad-manager/blob/ef07d3f/src/Joypad.ts#L356)*

Vibrate the controller if supported.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`vibrationParameters` | Partial‹[VibrationParameters](../interfaces/_joypad_.vibrationparameters.md)› | {
    startDelay: 0,
    duration: 1000,
    weakMagnitude: 1,
    strongMagnitude: 1,
  } |

**Returns:** *Promise‹undefined | "invalid-parameter" | "complete" | "preempted"›*
