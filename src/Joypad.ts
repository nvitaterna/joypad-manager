import JoypadEventEmitter from './JoypadEventEmitter';
import * as JOYPAD_EVENTS from './event-names';
import generateButtonState from './generate-button-state';
import { JoypadMap, JoypadConfig } from './types';

export default class Joypad extends JoypadEventEmitter {
  /**
   * Button state object
   */
  private buttonState!: ReturnType<typeof generateButtonState>;

  /**
   * Whether or not the controller is connected
   */
  private connected = false;

  /**
   * The id - retrieved from the native id
   */
  id?: string;

  /**
   * @param index the gamepad index in the JoypadManager.joypads array
   * @param joypadConfig the joypad config
   * @param mappings custom gamepad button mappings
   */
  constructor(
    readonly index: number,
    private joypadConfig: JoypadConfig,
    private mappings: JoypadMap[],
  ) {
    super();
  }

  /**
   * Set the id
   * @param id the native id
   */
  private setId(id: string) {
    if (this.id !== id) {
      this.id = id;
      this.buttonState = generateButtonState(this.id, this.mappings);
    }
  }

  /**
   * Check of the controller is connected
   */
  get isConnected() {
    return this.connected;
  }

  /**
   * The function to call to initiate the connect event
   * @param nativePad the native HTML5 Gamepad
   */
  private connect(nativePad: Gamepad) {
    this.setId(nativePad.id);
    this.connected = true;
    this.dispatchEvent('connect', {
      joypad: this,
      nativePad,
    });
  }

  /**
   * The function to call to initiate the disconnect event
   * @param nativePad the native HTML5 Gamepad
   */
  private disconnect(nativePad: Gamepad | null) {
    if (this.connected) {
      this.connected = false;
      this.dispatchEvent('disconnect', {
        joypad: this,
        nativePad,
      });
    }
  }

  /**
   * The main update loop function
   * @param nativePad the native HTML5 Gamepad object
   */
  update(nativePad: Gamepad | null) {
    if (!nativePad || !nativePad.connected) {
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
          if (!(nativeButton.value % 1) || !(buttonState.value % 1) || !nativeButton.value || !buttonState.value || Math.abs(nativeButton.value - buttonState.value) >= this.joypadConfig.analogThreshold) {
            this.dispatchEvent('buttonchange', {
              button: buttonState,
              joypad: this,
              nativeButton,
              nativePad,
            });
          }
        }

        // allows us to use analog buttons press/release
        if (nativeButton.value === 1) {
          this.dispatchEvent('buttonpress', {
            button: buttonState,
            joypad: this,
            nativeButton,
            nativePad,
          });
        } else if (nativeButton.value === 0) {
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
          (Math.abs(axisState.value) <= this.joypadConfig.axisDeadzone && Math.abs(value) > this.joypadConfig.axisDeadzone)
          || (Math.abs(value) <= this.joypadConfig.axisDeadzone && Math.abs(axisState.value) > this.joypadConfig.axisDeadzone)
          || (Math.abs(value) >= this.joypadConfig.axisDeadzone && Math.abs(value - axisState.value) >= this.joypadConfig.analogThreshold)
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
