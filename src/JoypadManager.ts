import Joypad from './Joypad';

export default class JoypadManager {
  readonly gamepads: Joypad[] = [];

  constructor(
    maxGamepads = 4,
  ) {
    for (let i = 0; i < maxGamepads; i += 1) {
      this.gamepads[i] = new Joypad(i);
    }
  }

  update() {
    const rawGamepads = navigator.getGamepads();
    this.gamepads.forEach((gamepad, index) => {
      const nativePad = rawGamepads[index];
      gamepad.update(nativePad);
    });
  }
}
