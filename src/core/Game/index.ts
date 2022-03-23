import { GameStatue, MoveDirection } from '../types'
import SquareGroup from './../Square/SquareGroup'
import { createTetris } from '../Tetris/Tetris'
import { TetrisRules } from './../Tetris/TetrisRules'
import { IGameViewer } from './../types'

/**
 * 游戏类，控制游戏进程
 */

export class Game {
  private _gameStatus: GameStatue = GameStatue.init
  private _curTetris?: SquareGroup
  private _nextTetris: SquareGroup = createTetris({ x: 0, y: 0 })
  private _timer: any
  private _duration: number = 1000

  constructor(private _gameViewer: IGameViewer) {
    this._gameViewer.showNext(this._nextTetris)
  }
  /**
   * 游戏开始
   */
  start() {
    if ((this._gameStatus = GameStatue.playing)) return
    if (!this._curTetris) this.switchSquare()
    this._gameStatus = GameStatue.playing
    this.autoDrop()
  }

  /**
   * 小方块自有下落
   */
  private autoDrop() {
    if (this._timer || this._gameStatus !== GameStatue.playing) return
    this._timer = setInterval(() => {
      if (this._curTetris) {
        TetrisRules.move(this._curTetris, MoveDirection.down)
      }
    }, this._duration)
  }

  /**
   * 切换方块
   */
  private switchSquare() {
    this._curTetris = this._nextTetris
    this._nextTetris = createTetris({ x: 0, y: 0 })
    this._gameViewer.switch(this._curTetris)
    this._gameViewer.showNext(this._nextTetris)
  }
}
