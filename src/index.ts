import './style/index.scss'
import { Game } from './core/Game/index'
import { GameViewer } from './core/Viewer/GameViewer'
import $ from 'jquery'

const game = new Game(new GameViewer())

$('.left').click(() => {
  game.control_left()
})

$('.right').click(() => {
  game.control_right()
})

$('.down').click(() => {
  game.control_down()
})

$('.rotate').click(() => {
  game.control_rotate()
})

$('.start').click(() => {
  game.start()
})
$('.pause').click(() => {
  game.pause()
})
