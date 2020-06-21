import {
  JoypadEventName,
} from './types';

export default class JoypadEventTracker {
  callbacks: Function[] = [];

  constructor(
    public name: JoypadEventName,
  ) {}

  registerCallback(callback: Function) {
    this.callbacks.push(callback);
  }

  unRegisterCallback(callback: Function) {
    this.callbacks = this.callbacks.filter((c) => c !== callback);
  }
}
