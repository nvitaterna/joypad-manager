interface AxisMapping {
  name: string
}

interface ButtonMapping {
  name: string
  analog?: true
}

interface GamepadMap {
  id: string
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
  analog?: true
  value: number
  pressed: boolean
  touched: boolean
}
