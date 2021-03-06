[joypad-manager](../README.md) › ["JoypadManager"](../modules/_joypadmanager_.md) › [JoypadManager](_joypadmanager_.joypadmanager.md)

# Class: JoypadManager

## Hierarchy

* **JoypadManager**

## Index

### Constructors

* [constructor](_joypadmanager_.joypadmanager.md#constructor)

### Properties

* [joypads](_joypadmanager_.joypadmanager.md#readonly-joypads)

### Methods

* [update](_joypadmanager_.joypadmanager.md#update)

## Constructors

###  constructor

\+ **new JoypadManager**(`joypadConfig`: Partial‹[JoypadConfig](../interfaces/_joypadmanager_.joypadconfig.md)›, `mappings`: [JoypadMap](../interfaces/_mappings_index_.joypadmap.md)[]): *[JoypadManager](_joypadmanager_.joypadmanager.md)*

Defined in JoypadManager.ts:20

Initiate the JoypadManager

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`joypadConfig` | Partial‹[JoypadConfig](../interfaces/_joypadmanager_.joypadconfig.md)› | {} | Optional Joypad configuration |
`mappings` | [JoypadMap](../interfaces/_mappings_index_.joypadmap.md)[] | [] | Optional custom list of mappings  |

**Returns:** *[JoypadManager](_joypadmanager_.joypadmanager.md)*

## Properties

### `Readonly` joypads

• **joypads**: *[Joypad](_joypad_.joypad.md)[]* = []

Defined in JoypadManager.ts:20

The array of joypads.

## Methods

###  update

▸ **update**(): *void*

Defined in JoypadManager.ts:37

The main update loop - updates every joypad and passes the reference to the native gamepad.

**Returns:** *void*
