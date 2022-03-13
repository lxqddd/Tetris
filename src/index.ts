import $ from 'jquery'
import Square from './core/Square/Square'
import Viewer from './core/Viewer/Viewer'
import './style/index.scss'
import SquareGroup from './core/Square/SquareGroup'
import { IPoint } from './core/types'

const square = new Square()
const viewer = new Viewer(square, $('#app'))

const shape: IPoint[] = [
  { x: 0, y: -1 },
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 }
]

const sqGroup = new SquareGroup(
  shape,
  {
    x: 3,
    y: 5
  },
  'skyblue'
)

sqGroup.squares.forEach((sq) => {
  sq.viewer = new Viewer(sq, $('#app'))
})
