interface AxisMapping {
  name: string
}

interface ButtonMapping {
  name: string
  analog?: boolean
}

interface GamepadMap {
  ids: string[]
  buttons: ButtonMapping[]
  axes: AxisMapping[]
}

interface AxisState {
  name: string
  type: 'analog'
  value: number
}

interface ButtonState {
  name: string
  analog: boolean
  value: number
  pressed: boolean
  touched: boolean
}
