import EventEmitter from './EventEmitter';
import generateButtonState from './helpers/generateButtonState';

const AXIS_PRESS_THRESHOLD = 0.8;
const ANALOG_CHANGE_THRESHOLD = 0.1;
const AXIS_DEADZONE = 0.2;

export default class Gamepad extends EventEmitter {
  buttonState!: ReturnType<typeof generateButtonState>;

  id?: string;

  constructor(
    public index: number,
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

  setId(id: string) {
    if (this.id !== id) {
      this.id = id;
      this.buttonState = generateButtonState(id);
    }
  }

  connected(gamepad: globalThis.Gamepad) {
    // set the id
    this.setId(gamepad.id);
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
    if (!this.id) {
      this.setId(nativePad.id);
    }
    nativePad.buttons.forEach((nativeButton, index) => {
      const buttonState = this.buttonState.buttons[index];
      if (!buttonState) {
        return;
      }

      // if this is an analog button - send the event for valuechanged
      if (nativeButton.value !== buttonState.value && buttonState.analog) {
        if (!(nativeButton.value % 1) || !(buttonState.value % 1) || !nativeButton.value || !buttonState.value || Math.abs(nativeButton.value - buttonState.value) >= ANALOG_CHANGE_THRESHOLD) {
          buttonState.pressed = nativeButton.pressed;
          buttonState.touched = nativeButton.touched;
          buttonState.value = nativeButton.value;
          this.dispatchEvent('buttonchange', buttonState.name, buttonState, index, nativeButton);
        }
      }
      // send the regular pressed event regardless
      if (nativeButton.pressed && !buttonState.pressed) {
        buttonState.pressed = nativeButton.pressed;
        buttonState.touched = nativeButton.touched;
        buttonState.value = nativeButton.value;
        this.dispatchEvent('buttonpress', buttonState.name, buttonState, index, nativeButton);
      } else if (!nativeButton.pressed && buttonState.pressed) {
        // send released event
        buttonState.pressed = nativeButton.pressed;
        buttonState.touched = nativeButton.touched;
        buttonState.value = nativeButton.value;
        this.dispatchEvent('buttonrelease', buttonState.name, buttonState, index, nativeButton);
      }
    });

    nativePad.axes.forEach((value, index) => {
      const axisState = this.buttonState.axes[index];
      if (!axisState) {
        return;
      }
      if (value !== axisState.value) {
        if (
          !(value % 1)
          || !(axisState.value % 1)
          || (Math.abs(axisState.value) <= AXIS_DEADZONE && Math.abs(value) > AXIS_DEADZONE)
          || (Math.abs(value) <= AXIS_DEADZONE && Math.abs(axisState.value) > AXIS_DEADZONE)
          || Math.abs(value - axisState.value) >= ANALOG_CHANGE_THRESHOLD) {
          const initialValue = axisState.value;
          axisState.value = value;
          this.dispatchEvent('axischange', axisState.name, axisState, index);
          if ((value >= AXIS_PRESS_THRESHOLD && initialValue < AXIS_PRESS_THRESHOLD) || (value <= -AXIS_PRESS_THRESHOLD && initialValue > -AXIS_PRESS_THRESHOLD)) {
            this.dispatchEvent('axispress', axisState.name, axisState, index);
          } else if ((value < AXIS_PRESS_THRESHOLD && initialValue >= AXIS_PRESS_THRESHOLD) || (value > -AXIS_PRESS_THRESHOLD && initialValue <= -AXIS_PRESS_THRESHOLD)) {
            this.dispatchEvent('axisrelease', axisState.name, axisState, index);
          }
        }
      }
    });
  }
}
