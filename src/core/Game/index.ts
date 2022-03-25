import { GameStatue, MoveDirection } from '../types'
import SquareGroup from './../Square/SquareGroup'
import { createTetris } from '../Tetris/Tetris'
import { TetrisRules } from './../Tetris/TetrisRules'
import { IGameViewer } from './../types'
import { nextPanel } from '../GameConfig'
import { gamePanel } from './../GameConfig'

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
    this.resetCenterPoint(nextPanel.width, this._nextTetris)
    this._gameViewer.showNext(this._nextTetris)
  }
  /**
   * 游戏开始
   */
  start() {
    if (this._gameStatus === GameStatue.playing) return
    if (!this._curTetris) this.switchSquare()
    this._gameStatus = GameStatue.playing
    this.autoDrop()
  }

  /**
   * 游戏暂停
   */
  pause() {
    if (!(this._gameStatus === GameStatue.playing)) return
    clearInterval(this._timer)
    this._timer = null
    this._gameStatus = GameStatue.pause
  }

  /**
   * 控制方块向左移动
   */
  public control_left() {
    this.control_move(MoveDirection.left)
  }

  /**
   * 控制方块向右移动
   */
  public control_right() {
    this.control_move(MoveDirection.right)
  }

  /**
   * 控制方块向下移动
   */
  public control_down() {
    if (this._curTetris && this._gameStatus === GameStatue.playing) {
      TetrisRules.moveDirection(this._curTetris, MoveDirection.down)
    }
  }

  public control_rotate() {
    if (this._curTetris && this._gameStatus === GameStatue.playing) {
      TetrisRules.rotate(this._curTetris)
    }
  }

  /**
   * 小方块自由下落
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
    this.resetCenterPoint(gamePanel.width, this._curTetris)
    this._nextTetris = createTetris({ x: 0, y: 0 })
    this.resetCenterPoint(nextPanel.width, this._nextTetris)
    this._gameViewer.switch(this._curTetris)
    this._gameViewer.showNext(this._nextTetris)
  }

  /**
   * 设置中心点坐标，以达到让该方块对象出现在面板区域的中上方
   * @param width 面板宽度
   * @param tetris 方块对象
   */
  private resetCenterPoint(width: number, tetris: SquareGroup) {
    const x = Math.ceil(width / 2) - 1
    const y = 0

    tetris.centerPoint = { x, y }
    while (tetris.squares.some((it) => it.point.y < 0)) {
      tetris.squares.forEach((sq) => {
        sq.point = {
          x: sq.point.x,
          y: sq.point.y + 1
        }
      })
    }
  }

  private control_move(direction: MoveDirection) {
    if (this._curTetris && this._gameStatus === GameStatue.playing) {
      TetrisRules.move(this._curTetris, direction)
    }
  }
}
