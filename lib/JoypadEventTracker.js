export default class JoypadEventTracker {
    constructor(name) {
        this.name = name;
        this.callbacks = [];
    }
    registerCallback(callback) {
        this.callbacks.push(callback);
    }
    unRegisterCallback(callback) {
        this.callbacks = this.callbacks.filter((c) => c !== callback);
    }
}
//# sourceMappingURL=JoypadEventTracker.js.map