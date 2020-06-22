import mappings from './mappings';
export default function generateButtonState(id, customMappings) {
    const gamepadMap = mappings.concat(customMappings).find((mapping) => mapping.ids.includes(id)) || mappings[0];
    const buttons = (gamepadMap.buttons || []).map((button) => ({
        analog: !!button.analog,
        value: 0,
        name: button.name,
    }));
    const axes = (gamepadMap.axes || []).map((axis) => ({
        value: 0,
        name: axis.name,
    }));
    return {
        axes,
        buttons,
    };
}
//# sourceMappingURL=generate-button-state.js.map