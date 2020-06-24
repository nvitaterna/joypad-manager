import mappings from './mappings';
export default function generateButtonState(id, customMappings) {
    let gamepadMap = customMappings.concat(mappings).find((mapping) => mapping.ids.some((mappingId) => mappingId.includes(id)));
    if (!gamepadMap) {
        gamepadMap = mappings.find((mapping) => mapping.ids.includes('default'));
    }
    const buttons = ((gamepadMap === null || gamepadMap === void 0 ? void 0 : gamepadMap.buttons) || []).map((button) => ({
        value: 0,
        name: button.name,
    }));
    const sticks = ((gamepadMap === null || gamepadMap === void 0 ? void 0 : gamepadMap.sticks) || []).map((stick) => ({
        name: stick.name,
        value: {
            x: 0,
            y: 0,
            angle: 0,
        },
    }));
    return {
        mapping: gamepadMap,
        buttons,
        sticks,
    };
}
//# sourceMappingURL=generate-button-state.js.map