[joypad-manager](../README.md) › [Globals](../globals.md) › ["src/JoypadEventTracker"](../modules/_src_joypadeventtracker_.md) › [JoypadEventTracker](_src_joypadeventtracker_.joypadeventtracker.md)

# Class: JoypadEventTracker

## Hierarchy

* **JoypadEventTracker**

## Index

### Constructors

* [constructor](_src_joypadeventtracker_.joypadeventtracker.md#constructor)

### Properties

* [callbacks](_src_joypadeventtracker_.joypadeventtracker.md#callbacks)
* [name](_src_joypadeventtracker_.joypadeventtracker.md#name)

### Methods

* [registerCallback](_src_joypadeventtracker_.joypadeventtracker.md#registercallback)
* [unRegisterCallback](_src_joypadeventtracker_.joypadeventtracker.md#unregistercallback)

## Constructors

###  constructor

\+ **new JoypadEventTracker**(`name`: [JoypadEventName](../modules/_src_joypadeventemitter_.md#joypadeventname)): *[JoypadEventTracker](_src_joypadeventtracker_.joypadeventtracker.md)*

*Defined in [src/JoypadEventTracker.ts:4](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventTracker.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | [JoypadEventName](../modules/_src_joypadeventemitter_.md#joypadeventname) |

**Returns:** *[JoypadEventTracker](_src_joypadeventtracker_.joypadeventtracker.md)*

## Properties

###  callbacks

• **callbacks**: *Function[]* = []

*Defined in [src/JoypadEventTracker.ts:4](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventTracker.ts#L4)*

___

###  name

• **name**: *[JoypadEventName](../modules/_src_joypadeventemitter_.md#joypadeventname)*

*Defined in [src/JoypadEventTracker.ts:7](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventTracker.ts#L7)*

## Methods

###  registerCallback

▸ **registerCallback**(`callback`: Function): *void*

*Defined in [src/JoypadEventTracker.ts:10](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventTracker.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** *void*

___

###  unRegisterCallback

▸ **unRegisterCallback**(`callback`: Function): *void*

*Defined in [src/JoypadEventTracker.ts:14](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/JoypadEventTracker.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** *void*
