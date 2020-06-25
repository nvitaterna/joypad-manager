[joypad-manager](../README.md) › [Globals](../globals.md) › ["src/generate-button-state"](_src_generate_button_state_.md)

# Module: "src/generate-button-state"

## Index

### Functions

* [generateButtonState](_src_generate_button_state_.md#generatebuttonstate)

## Functions

###  generateButtonState

▸ **generateButtonState**(`id`: string, `customMappings`: [JoypadMap](../interfaces/_src_mappings_index_.joypadmap.md)[]): *object*

*Defined in [src/generate-button-state.ts:4](https://github.com/nvitaterna/joypad-manager/blob/6b977e7/src/generate-button-state.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`customMappings` | [JoypadMap](../interfaces/_src_mappings_index_.joypadmap.md)[] |

**Returns:** *object*

* **buttons**: *[ButtonState](../interfaces/_src_joypad_.buttonstate.md)[]*

* **mapping**: *undefined | [JoypadMap](../interfaces/_src_mappings_index_.joypadmap.md)* = gamepadMap

* **sticks**: *[StickState](../interfaces/_src_joypad_.stickstate.md)[]*
