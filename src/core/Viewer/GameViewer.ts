import SquareGroup from '../Square/SquareGroup'
import { GameStatue, IGameViewer } from '../types'
import Viewer from './Viewer'
import $ from 'jquery'
import { Game } from './../Game/index'
import { SquareConfig } from './pageConfig'
import { gamePanel } from './../GameConfig'

export class GameViewer implements IGameViewer {
  private _panel: JQuery<HTMLElement> = $('.panel')
  private _nextDom: JQuery<HTMLElement> = $('.next')
  init(game: Game): void {
    this._panel.css({
      width: SquareConfig.width * gamePanel.width + 'px',
      height: SquareConfig.height * gamePanel.height + 'px',
      background: '#000'
    })
    this._nextDom.css({
      width: '200px',
      height: '200px'
    })
    this.showScore(0)
    $(document).keydown((e) => {
      switch (e.keyCode) {
        case 13: // 回车控制旋转
          game.controlRotate()
          break
        case 32: // 空格控制开始和暂停
          if (game.gameStatus === GameStatue.playing) {
            game.pause()
          } else {
            game.start()
          }
          break
        case 37:
          game.controlLeft()
          break
        case 39:
          game.controlRight()
          break
        case 40:
          game.controlDown()
          break
      }
    })
  }
  showNext(tetris: SquareGroup): void {
    tetris.squares.forEach((sq) => {
      sq.viewer = new Viewer(sq, this._nextDom)
    })
  }
  switch(tetris: SquareGroup): void {
    tetris.squares.forEach((sq) => {
      sq.viewer!.remove()
      sq.viewer = new Viewer(sq, this._panel)
    })
  }
  showScore(score: number): void {
    $('.score').text(`${score} 分`).css({
      textAlign: 'center',
      fontWeight: '900',
      fontSize: '30px'
    })
  }
}
