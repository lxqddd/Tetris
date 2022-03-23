import SquareGroup from '../Square/SquareGroup'
import { IGameViewer } from '../types'
import Viewer from './Viewer'
import $ from 'jquery'

export class GameViewer implements IGameViewer {
  showNext(tetris: SquareGroup): void {
    tetris.squares.forEach((sq) => {
      sq.viewer = new Viewer(sq, $('.next'))
    })
  }
  switch(tetris: SquareGroup): void {
    tetris.squares.forEach((sq) => {
      sq.viewer!.remove()
      sq.viewer = new Viewer(sq, $('.panel'))
    })
  }
}
