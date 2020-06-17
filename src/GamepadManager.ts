import Gamepad from './Gamepad';

const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

export default class GamepadManager {
  gamepads: Gamepad[] = [];

  private running = false;

  private loopId?: number;

  constructor(
    maxGamepads = 4,
  ) {
    for (let i = 0; i < maxGamepads; i += 1) {
      this.gamepads[i] = new Gamepad(i, this);
    }
  }

  update() {
    const rawGamepads = navigator.getGamepads();
    this.gamepads.forEach((gamepad, index) => {
      const nativePad = rawGamepads[index];
      gamepad.update(nativePad);
    });
  }

  get isRunning() {
    return this.running;
  }

  start() {
    if (!this.isRunning) {
      this.loop();
    }
  }

  stop() {
    if (this.loopId) {
      cancelAnimationFrame(this.loopId);
    }
  }

  loop() {
    this.update();
    this.loopId = requestAnimationFrame(this.start.bind(this));
  }

  initializeEventListeners() {
    window.addEventListener('gamepadconnected', (evt) => {
      const { gamepad } = evt as GamepadEvent;
      this.gamepads[gamepad.index].connected();
    });
  }
}
