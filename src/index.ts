import $ from 'jquery'
import Square from './core/Square/Square'
import Viewer from './core/Viewer/Viewer'
import './style/index.scss'
import SquareGroup from './core/Square/SquareGroup'
import { IPoint } from './core/types'
import { createTetris, LineShape, SShape } from './core/Tetris'

const square = new Square()
const viewer = new Viewer(square, $('#app'))

const shape: IPoint[] = SShape

const sqGroup = createTetris({
  x: 3,
  y: 5
})

sqGroup.squares.forEach((sq) => {
  sq.viewer = new Viewer(sq, $('#app'))
})
