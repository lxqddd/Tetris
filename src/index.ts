import $ from 'jquery'
import Square from './core/Square/Square'
import Viewer from './core/Viewer/Viewer'
import './style/index.scss'
import { IPoint, MoveDirection } from './core/types'
import { createTetris } from './core/Tetris/Tetris'
import { TetrisRules } from './core/Tetris/TetrisRules'

const sqGroup = createTetris({
  x: 3,
  y: 5
})

sqGroup.squares.forEach((sq) => {
  sq.viewer = new Viewer(sq, $('#app'))
})

$('.down').click(() => {
  TetrisRules.moveDirection(sqGroup, MoveDirection.down)
})

$('.left').click(() => {
  TetrisRules.moveDirection(sqGroup, MoveDirection.left)
})

$('.right').click(() => {
  TetrisRules.moveDirection(sqGroup, MoveDirection.right)
})

$('.rotate').click(() => {
  sqGroup.rotate(false)
})
