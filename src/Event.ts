export default class Event {
  callbacks: Function[] = [];

  constructor(
    public name: string,
  ) {}

  registerCallback(callback: Function) {
    this.callbacks.push(callback);
  }

  unRegisterCallback(callback: Function) {
    this.callbacks = this.callbacks.filter((c) => c !== callback);
  }
}
