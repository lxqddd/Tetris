import $ from 'jquery'
import { IViewer } from '../types'
import Square from '../Square'
import { SquareConfig } from './pageConfig'

export default class Viewer implements IViewer {
  private dom?: JQuery<HTMLElement>
  constructor(private square: Square, private container: HTMLElement) {}
  show(): void {
    if (!this.dom) {
      this.dom = $('<div></div>').css({
        position: 'absolute',
        width: SquareConfig.width,
        height: SquareConfig.height,
        border: SquareConfig.border
      })
    }
    this.dom
      .css({
        left: this.square.point.x * SquareConfig.width,
        top: this.square.point.y * SquareConfig.height
      })
      .appendTo(this.container)
  }
  remove(): void {
    throw new Error('Method not implemented.')
  }
}
