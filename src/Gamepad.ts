import type GamepadManager from './GamepadManager';
import EventEmitter from './EventEmitter';
import generateButtonState from './helpers/generateButtonState';

const AXIS_PRESS_THRESHOLD = 0.8;
const ANALOG_CHANGE_THRESHOLD = 0.1;
const AXIS_DEADZONE = 0.2;

export default class Gamepad extends EventEmitter {
  buttonState = generateButtonState();

  constructor(
    public index: number,
    private gamepadManager: GamepadManager,
  ) {
    super();

    this.registerEvent('buttonpress');

    this.registerEvent('buttonrelease');

    // analog button value change event
    this.registerEvent('buttonchange');

    // axis value change event
    this.registerEvent('axischange');

    // axis press/release events - based on threshold
    this.registerEvent('axispress');
    this.registerEvent('axisrelease');

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
    nativePad.buttons.forEach((nativeButton, index) => {
      const button = this.buttonState.buttons[index];
      if (!button) {
        return;
      }

      // if this is an analog button - send the event for valuechanged
      if (nativeButton.value !== button.value && button.type === 'analog') {
        if (!(nativeButton.value % 1) || !(button.value % 1) || !nativeButton.value || !button.value || Math.abs(nativeButton.value - button.value) >= ANALOG_CHANGE_THRESHOLD) {
          button.pressed = nativeButton.pressed;
          button.touched = nativeButton.touched;
          button.value = nativeButton.value;
          this.dispatchEvent('buttonchange', button.name, button, index, nativeButton);
        }
      }
      // send the regular pressed event regardless
      if (nativeButton.pressed && !button.pressed) {
        button.pressed = nativeButton.pressed;
        button.touched = nativeButton.touched;
        button.value = nativeButton.value;
        this.dispatchEvent('buttonpress', button.name, button, index, nativeButton);
      } else if (!nativeButton.pressed && button.pressed) {
        // send released event
        button.pressed = nativeButton.pressed;
        button.touched = nativeButton.touched;
        button.value = nativeButton.value;
        this.dispatchEvent('buttonrelease', button.name, button, index, nativeButton);
      }
    });

    nativePad.axes.forEach((value, index) => {
      const axis = this.buttonState.axes[index];
      if (!axis) {
        return;
      }
      if (value !== axis.value) {
        if (
          !(value % 1)
          || !(axis.value % 1)
          || (Math.abs(axis.value) <= AXIS_DEADZONE && Math.abs(value) > AXIS_DEADZONE)
          || (Math.abs(value) <= AXIS_DEADZONE && Math.abs(axis.value) > AXIS_DEADZONE)
          || Math.abs(value - axis.value) >= ANALOG_CHANGE_THRESHOLD) {
          const initialValue = axis.value;
          axis.value = value;
          this.dispatchEvent('axischange', axis.name, axis, index);
          if ((value >= AXIS_PRESS_THRESHOLD && initialValue < AXIS_PRESS_THRESHOLD) || (value <= -AXIS_PRESS_THRESHOLD && initialValue > -AXIS_PRESS_THRESHOLD)) {
            this.dispatchEvent('axispress', axis.name, axis, index);
          } else if ((value < AXIS_PRESS_THRESHOLD && initialValue >= AXIS_PRESS_THRESHOLD) || (value > -AXIS_PRESS_THRESHOLD && initialValue <= -AXIS_PRESS_THRESHOLD)) {
            this.dispatchEvent('axisrelease', axis.name, axis, index);
          }
        }
      }
    });
  }
}
