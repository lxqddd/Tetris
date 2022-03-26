import SquareGroup from '../Square/SquareGroup'
import { IGameViewer } from '../types'
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
    $('.tip')
      .append(
        `<div>
    ${game.score} 分
    </div>`
      )
      .css({
        fontSize: '20px',
        fontWeight: '900',
        textAlign: 'center'
      })
    $(document).keydown((e) => {
      switch (e.keyCode) {
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
}
