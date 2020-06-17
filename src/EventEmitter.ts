import Event from './Event';

export default class EventEmitter {
  events: {[key: string]: Event} = {};

  registerEvent(name: string) {
    this.events[name] = new Event(name);
  }

  dispatchEvent(name: string, ...eventArgs: any) {
    this.events[name].callbacks.forEach((callback) => {
      callback(...eventArgs);
    });
  }

  addEventListener(name: string, callback: Function) {
    this.events[name].registerCallback(callback);
  }

  // alias for addEventListner
  on(name: string, callback: Function) {
    this.addEventListener(name, callback);
  }
}
