import { IPoint, Shape } from '../types'
import Square from './Square'
export default class SquareGroup {
  private _squares: readonly Square[]

  constructor(
    private _shape: Shape,
    private _centerPoint: IPoint,
    private _color: string
  ) {
    const sqArr: Square[] = []
    this._shape.forEach((p) => {
      const sq = new Square()
      sq.color = this._color
      sq.point = {
        x: this._centerPoint.x + p.x,
        y: this._centerPoint.y + p.y
      }
      sqArr.push(sq)
    })
    this._squares = sqArr
  }

  public get squares(): readonly Square[] {
    return this._squares
  }
}
