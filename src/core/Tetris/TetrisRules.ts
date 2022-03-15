import { MoveDirection, Shape } from '../types'
import { IPoint } from './../types'

export class TetrisRules {
  /**
   * 方块是否能移动
   */
  static canIMove(shape: Shape, targetPoint: IPoint): boolean {
    return true
  }

  /**
   * 移动小方块
   * @param shape 形状
   * @param direction 方向
   * @returns 是否移动成功
   */
  static move(shape: Shape, direction: MoveDirection): boolean {
    return true
  }
}
