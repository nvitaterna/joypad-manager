import { JoypadEventEmitter } from './JoypadEventEmitter';
import * as JOYPAD_EVENTS from './event-names';
import generateButtonState from './generate-button-state';
import type { JoypadConfig } from './JoypadManager';
import type { JoypadMap } from './mappings';

/** Vibration parameters for the Chrome-specific vibration actuator interface. */
export interface VibrationParameters {
  /** Delay in milliseconds before starting the vibration. */
  startDelay: number;
  /** Duration in milliseconds. */
  duration: number;
  /** The magnitude of the weak motor between 0 and 1. */
  weakMagnitude: number;
  /** The magnitude of the strong motor between 0 and 1. */
  strongMagnitude: number;
}

/** Chrome-specific vibration actuator */
interface VibrationActuator {
  /** Play a vibration effect - returns the result of the vibration. */
  playEffect: (
    type: 'dual-rumble',
    parameters: VibrationParameters,
  ) => Promise<'invalid-parameter' | 'complete' | 'preempted'>;
  /** Reset the running (if any) vibration effect. Will cause that vibration to be resolved with "preempted". */
  reset: () => Promise<'complete'>;
}

/** Extends the native gamepad API with the Chrome-specific vibration actuator */
interface Gamepad extends globalThis.Gamepad {
  vibrationActuator?: VibrationActuator;
}

/** The state of an individual analog stick. */
export interface StickState {
  /** The name/alias of the stick. */
  name: string;
  value: {
    /** The value of the mapped X axis. */
    x: number;
    /** The value of the mapped Y axis. */
    y: number;
    /** The angle of the stick in radians. */
    angle: number;
  };
}

/** The state of a button. */
export interface ButtonState {
  /** The name/alias of the button. */
  name: string;
  /** The value of the mapped button. */
  value: number;
}

/** The Joypad class that is used to create joypads in the [JoypadManager]{@linkcode JoypadManager}. */
export class Joypad extends JoypadEventEmitter {
  private buttonState!: ReturnType<typeof generateButtonState>;

  private connected = false;

  private nativePad?: Gamepad;

  /** The id retrieved from the native gamepad id. */
  private id?: string;

  /**
   * @param index The gamepad index in the [JoypadManager.joypads]{@linkcode JoypadManager.joypads} array.
   * @param joypadConfig The joypad configuration.
   * @param mappings Custom gamepad button mappings.
   */
  constructor(
    readonly index: number,
    private joypadConfig: JoypadConfig,
    private mappings: JoypadMap[],
  ) {
    super();
  }

  /** The key-value mappings of the joypad buttons. */
  get buttons() {
    return (this.buttonState?.buttons || []).reduce((buttonMap, button) => {
      buttonMap[button.name] = button;
      return buttonMap;
    }, {} as { [key: string]: ButtonState });
  }

  /** The key-value mappings of the joypad sticks. */
  get sticks() {
    return (this.buttonState?.sticks || []).reduce((stickMap, stick) => {
      // eslint-disable-next-line no-param-reassign
      stickMap[stick.name] = stick;
      return stickMap;
    }, {} as { [key: string]: StickState });
  }

  /** The current mapping this gamepad is using. */
  get mapping() {
    return this.buttonState.mapping;
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

  /** Is the controller connected? Determined by checking if this is attached to a native gamepad AND if that native gamepad is connected. */
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
    const connected = this.syncNativePad(nativePad);
    if (!connected) {
      return;
    }

    this.loopButtons();

    this.loopSticks();
  }

  /** Sync this.nativePad with the updated gamepad, return whether or not it is connected. */
  private syncNativePad(nativePad: Gamepad | null) {
    if (!nativePad || !nativePad.connected) {
      if (this.connected) {
        this.disconnect(nativePad);
      }
      return false;
    }
    if (nativePad?.connected && !this.connected) {
      this.connect(nativePad);
    }
    if (nativePad && this.nativePad !== nativePad) {
      this.nativePad = nativePad;
    }
    if (!this.id) {
      this.setId(nativePad.id);
    }
    return true;
  }

  /** Loop through buttons */
  private loopButtons() {
    const nativePad = this.nativePad!;
    this.buttonState.mapping?.buttons?.forEach((buttonMapping, index) => {
      const nativeButton = nativePad.buttons[index];

      if (!nativeButton) {
        return;
      }

      const buttonState = this.buttons[buttonMapping.name];
      const previousValue = buttonState.value;

      // always set state every loop
      buttonState.value = nativeButton.value;

      // if a button value is different than the new value
      if (nativeButton.value !== previousValue) {
        if (buttonMapping.analog) {
          if (
            // always send event if value is 0 or 1
            nativeButton.value === 1 ||
            previousValue === 1 ||
            nativeButton.value === 0 ||
            previousValue === 0
          ) {
            this.dispatchEvent(JOYPAD_EVENTS.BUTTON_CHANGE, {
              button: buttonState,
              joypad: this,
              nativeButton,
              nativePad,
              index,
            });
          }
        }

        // we will still process these events for analog buttons so analog buttons can be treated as digital
        if (nativeButton.value === 1 && previousValue === 0) {
          this.dispatchEvent(JOYPAD_EVENTS.BUTTON_PRESS, {
            button: buttonState,
            joypad: this,
            nativeButton,
            nativePad,
            index,
          });
        } else if (nativeButton.value === 0 && previousValue === 1) {
          this.dispatchEvent(JOYPAD_EVENTS.BUTTON_RELEASE, {
            button: buttonState,
            joypad: this,
            nativeButton,
            nativePad,
            index,
          });
        }
      }
    });
  }

  /**
   * Determine whether or not an axis should fire the change event
   * @param stateValue the previous value
   * @param nativeValue the new value
   */
  private checkAxis(stateValue: number, nativeValue: number) {
    if (stateValue === nativeValue) {
      return false;
    }

    const stateAbs = Math.abs(stateValue);
    const nativeAbs = Math.abs(nativeValue);

    const stateIsDead = Math.abs(stateAbs) <= this.joypadConfig.axisDeadzone;
    const nativeIsDead = Math.abs(nativeAbs) <= this.joypadConfig.axisDeadzone;

    // if both are dead - no event
    if (stateIsDead && nativeIsDead) {
      return false;
    }

    return true;
  }

  /** Loop through analog sticks */
  private loopSticks() {
    const nativePad = this.nativePad!;
    this.buttonState.mapping?.sticks?.forEach((stickMapping) => {
      let nativeX = nativePad.axes[stickMapping.axes.x];
      let nativeY = nativePad.axes[stickMapping.axes.y];

      // if both are undefined - no event
      if (nativeX === undefined && nativeY === undefined) {
        return;
      }

      // set either to 0 if they are undefined
      nativeX = nativeX === undefined ? 0 : nativeX;
      nativeY = nativeY === undefined ? 0 : nativeY;

      const stickState = this.sticks[stickMapping.name];
      const previousX = stickState.value.x;
      const previousY = stickState.value.y;

      // make sure we update state every loop
      stickState.value.x = Math.abs(nativeX) <= this.joypadConfig.axisDeadzone ? 0 : nativeX;
      stickState.value.y = Math.abs(nativeY) <= this.joypadConfig.axisDeadzone ? 0 : nativeY;

      let radians = Math.atan2(stickState.value.y, stickState.value.x);
      if (radians < 0) {
        radians += 2 * Math.PI;
      }
      stickState.value.angle = radians;

      if (this.checkAxis(previousX, nativeX) || this.checkAxis(previousY, nativeY)) {
        this.dispatchEvent(JOYPAD_EVENTS.STICK_MOVE, {
          stick: stickState,
          joypad: this,
          nativePad,
          nativeAxes: {
            x: nativeX,
            y: nativeY,
          },
          index: [stickMapping.axes.x, stickMapping.axes.y],
        });
      }
    });
  }

  /** Vibrate the controller if supported. */
  async vibrate(vibrationParameters: Partial<VibrationParameters> = {}) {
    const {
      startDelay = 0,
      duration = 1000,
      weakMagnitude = 1,
      strongMagnitude = 1,
    } = vibrationParameters;
    return this.nativePad?.vibrationActuator?.playEffect('dual-rumble', {
      startDelay,
      duration,
      weakMagnitude,
      strongMagnitude,
    });
  }

  /** Stop any current vibrations. */
  stopVibrate() {
    return this.nativePad?.vibrationActuator?.reset();
  }
}
