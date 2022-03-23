import './style/index.scss'
import { Game } from './core/Game/index'
import { GameViewer } from './core/Viewer/GameViewer'

const game = new Game(new GameViewer())

game.start()
