import { IPoint, Shape } from '../types'
import Square from './Square'
/**
 * 方块组合类
 */
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

  public get shape(): Shape {
    return this._shape
  }

  public get centerPoint(): IPoint {
    return this._centerPoint
  }

  /**
   * 更新中心点位置的时候更新每个小方块的坐标
   */
  public set centerPoint(v: IPoint) {
    this._centerPoint = v
    this._shape.forEach((sq, index) => {
      this._squares[index].point = {
        x: this._centerPoint.x + sq.x,
        y: this._centerPoint.y + sq.y
      }
    })
  }
}
