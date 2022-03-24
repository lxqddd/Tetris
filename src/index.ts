import './style/index.scss'
import { Game } from './core/Game/index'
import { GameViewer } from './core/Viewer/GameViewer'
import $ from 'jquery'

const game = new Game(new GameViewer())

$('.start').click(() => {
  game.start()
})
$('.pause').click(() => {
  game.pause()
})
