import JoypadEventEmitter from './JoypadEventEmitter';
import * as JOYPAD_EVENTS from './event-names';
import generateButtonState from './generate-button-state';
import { JoypadMap } from './types';

const ANALOG_CHANGE_THRESHOLD = 0.1;
const AXIS_DEADZONE = 0.3;

export default class Joypad extends JoypadEventEmitter {
  private buttonState!: ReturnType<typeof generateButtonState>;

  private connected = false;

  id?: string;

  constructor(
    readonly index: number,
    private mappings: JoypadMap[],
  ) {
    super();
  }

  setId(id: string) {
    if (this.id !== id) {
      this.id = id;
      this.buttonState = generateButtonState(this.id, this.mappings);
    }
  }

  get isConnected() {
    return this.connected;
  }

  private connect(nativePad: Gamepad) {
    // set the id
    this.setId(nativePad.id);
    this.connected = true;
    this.dispatchEvent('connect', {
      joypad: this,
      nativePad,
    });
  }

  private disconnect(nativePad: Gamepad | null) {
    if (this.connected) {
      this.connected = false;
      this.dispatchEvent('disconnect', {
        joypad: this,
        nativePad,
      });
    }
  }

  update(nativePad: Gamepad | null) {
    if (!nativePad || !nativePad.connected) {
      // send disconnect event if status has changed
      if (this.connected) {
        this.disconnect(nativePad);
      }
      return;
    } if (nativePad?.connected && !this.connected) {
      this.connect(nativePad);
    }
    if (!this.id) {
      this.setId(nativePad.id);
    }
    nativePad.buttons.forEach((nativeButton, index) => {
      const buttonState = this.buttonState.buttons[index];
      if (!buttonState) {
        return;
      }

      // if a button value is different than the new value
      if (nativeButton.value !== buttonState.value) {
        // if it is analog, check against the threshold
        if (buttonState.analog) {
          if (!(nativeButton.value % 1) || !(buttonState.value % 1) || !nativeButton.value || !buttonState.value || Math.abs(nativeButton.value - buttonState.value) >= ANALOG_CHANGE_THRESHOLD) {
            this.dispatchEvent('buttonchange', {
              button: buttonState,
              joypad: this,
              nativeButton,
              nativePad,
            });
          }
        // if it's digital, dispatch press/release
        } else if (nativeButton.value) {
          this.dispatchEvent('buttonpress', {
            button: buttonState,
            joypad: this,
            nativeButton,
            nativePad,
          });
        } else {
          this.dispatchEvent('buttonrelease', {
            button: buttonState,
            joypad: this,
            nativeButton,
            nativePad,
          });
        }
        buttonState.value = nativeButton.value;
      }
    });

    nativePad.axes.forEach((value, index) => {
      const axisState = this.buttonState.axes[index];
      if (!axisState) {
        return;
      }
      if (value !== axisState.value) {
        if (
          (Math.abs(axisState.value) <= AXIS_DEADZONE && Math.abs(value) > AXIS_DEADZONE)
          || (Math.abs(value) <= AXIS_DEADZONE && Math.abs(axisState.value) > AXIS_DEADZONE)
          || (Math.abs(value) >= AXIS_DEADZONE && Math.abs(value - axisState.value) >= ANALOG_CHANGE_THRESHOLD)
        ) {
          axisState.value = value;
          this.dispatchEvent(JOYPAD_EVENTS.AXIS_MOVE, {
            button: axisState,
            joypad: this,
            nativePad,
          });
        }
      }
    });
  }
}