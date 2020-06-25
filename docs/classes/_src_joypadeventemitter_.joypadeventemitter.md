[joypad-manager](../README.md) › [Globals](../globals.md) › ["src/JoypadEventEmitter"](../modules/_src_joypadeventemitter_.md) › [JoypadEventEmitter](_src_joypadeventemitter_.joypadeventemitter.md)

# Class: JoypadEventEmitter

## Hierarchy

* **JoypadEventEmitter**

  ↳ [Joypad](_src_joypad_.joypad.md)

## Index

### Methods

* [addEventListener](_src_joypadeventemitter_.joypadeventemitter.md#addeventlistener)
* [clearEvents](_src_joypadeventemitter_.joypadeventemitter.md#clearevents)
* [removeEventListener](_src_joypadeventemitter_.joypadeventemitter.md#removeeventlistener)

## Methods

###  addEventListener

▸ **addEventListener**‹**K**›(`name`: K, `callback`: function): *void*

*Defined in [src/JoypadEventEmitter.ts:67](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventEmitter.ts#L67)*

Add an event listener from this Joypad.

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

*Defined in [src/JoypadEventEmitter.ts:83](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventEmitter.ts#L83)*

Remove all listeners from this Joypad.

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**‹**K**›(`name`: K, `callback`: function): *void*

*Defined in [src/JoypadEventEmitter.ts:76](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventEmitter.ts#L76)*

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
