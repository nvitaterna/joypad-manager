[joypad-manager](../README.md) › ["JoypadEventEmitter"](../modules/_joypadeventemitter_.md) › [JoypadEventEmitter](_joypadeventemitter_.joypadeventemitter.md)

# Class: JoypadEventEmitter

## Hierarchy

* **JoypadEventEmitter**

  ↳ [Joypad](_joypad_.joypad.md)

## Index

### Methods

* [addEventListener](_joypadeventemitter_.joypadeventemitter.md#addeventlistener)
* [clearEvents](_joypadeventemitter_.joypadeventemitter.md#clearevents)
* [removeEventListener](_joypadeventemitter_.joypadeventemitter.md#removeeventlistener)

## Methods

###  addEventListener

▸ **addEventListener**‹**K**›(`name`: K, `callback`: function): *void*

Defined in JoypadEventEmitter.ts:66

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

Defined in JoypadEventEmitter.ts:82

Remove all listeners from this Joypad.

**Returns:** *void*

___

###  removeEventListener

▸ **removeEventListener**‹**K**›(`name`: K, `callback`: function): *void*

Defined in JoypadEventEmitter.ts:75

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
