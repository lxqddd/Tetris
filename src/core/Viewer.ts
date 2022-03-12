import { IViewer } from './types'
import Square from './Square'

export default class Viewer implements IViewer {
  constructor(private square: Square) {}
  public show(): void {
    console.log(this.square.point, this.square.color)
  }

  public remove(): void {}
}
