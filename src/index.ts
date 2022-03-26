import './style/index.scss'
import { Game } from './core/Game/index'
import { GameViewer } from './core/Viewer/GameViewer'
import $ from 'jquery'

const game = new Game(new GameViewer())

$('.left').click(() => {
  game.controlLeft()
})

$('.right').click(() => {
  game.controlRight()
})

$('.down').click(() => {
  game.controlDown()
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
