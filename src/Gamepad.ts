import type GamepadManager from './GamepadManager';
import EventEmitter from './EventEmitter';
import generateButtonState from './helpers/generateButtonState';

export default class Gamepad extends EventEmitter {
  buttons = generateButtonState();

  constructor(
    public index: number,
    private gamepadManager: GamepadManager,
  ) {
    super();

    this.registerEvent('buttonpress');
    this.registerEvent('buttonrelease');
    this.registerEvent('connected');
    this.registerEvent('disconnected');
  }

  setupEventListeners() {
    window.addEventListener('gamepadconnected', (event) => {
      this.dispatchEvent('connected', event);
    });
  }

  connected() {
    this.dispatchEvent('connected', this);
  }

  disconnected() {
    this.dispatchEvent('disconnected', this);
  }

  update(nativePad: globalThis.Gamepad | null) {
    if (!nativePad) {
      this.disconnected();
      return;
    }
    this.buttons.forEach((button, index) => {
      const nativeButton = nativePad.buttons[index];
      if (!nativeButton) {
        return;
      }
      if (nativeButton.value !== button.value) {
        // value changed -
      }
      if (nativeButton.pressed) {
        if (!button.pressed) {
          button.pressed = nativeButton.pressed;
          button.touched = nativeButton.touched;
          button.value = nativeButton.value;
          this.dispatchEvent('buttonpress', button.alias, button, index, nativeButton);
        }
      } else if (!nativeButton.pressed) {
        if (button.pressed) {
          button.pressed = nativeButton.pressed;
          button.touched = nativeButton.touched;
          button.value = nativeButton.value;
          this.dispatchEvent('buttonrelease', button.alias, button, index, nativeButton);
        }
      }
    });
  }
}
