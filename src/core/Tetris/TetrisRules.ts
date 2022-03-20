import { MoveDirection, Shape } from '../types'
import { IPoint } from './../types'
import { gamePanel } from './../GameConfig'
import SquareGroup from './../Square/SquareGroup'

function isPoint(obj: any): obj is IPoint {
  if (typeof obj.x === 'undefined') {
    return false
  }
  return true
}

/**
 * 方块规则类，根据游戏规则，判断各种情况
 */
export class TetrisRules {
  /**
   * 方块是否能移动到指定位置
   */
  static canIMove(shape: Shape, targetPoint: IPoint): boolean {
    let ret = true
    for (let i = 0; i < shape.length; i++) {
      if (ret === false) return false
      const afterSqX = shape[i].x + targetPoint.x
      const afterSqY = shape[i].y + targetPoint.y
      if (
        afterSqX < 0 ||
        afterSqX > gamePanel.width - 1 ||
        afterSqY < 0 ||
        afterSqY > gamePanel.height - 1
      ) {
        ret = false
      }
    }
    return ret
  }

  /**
   * 移动小方块
   * @param tetris 方块组
   * @param targetPointOrDirection 目标点或者是方向
   * @returns 是否移动成功
   */
  static move(tetris: SquareGroup, targetPoint: IPoint): boolean
  static move(tetris: SquareGroup, direction: MoveDirection): boolean
  static move(
    tetris: SquareGroup,
    targetPointOrDirection: IPoint | MoveDirection
  ): boolean {
    if (isPoint(targetPointOrDirection)) {
      if (this.canIMove(tetris.shape, targetPointOrDirection)) {
        tetris.centerPoint = targetPointOrDirection
        return true
      }
      return false
    } else {
      const direction = targetPointOrDirection
      let targetPoint: IPoint
      switch (direction) {
        case MoveDirection.down:
          targetPoint = {
            x: tetris.centerPoint.x,
            y: tetris.centerPoint.y + 1
          }
          break
        case MoveDirection.left:
          targetPoint = {
            x: tetris.centerPoint.x - 1,
            y: tetris.centerPoint.y
          }
          break
        case MoveDirection.right:
          targetPoint = {
            x: tetris.centerPoint.x + 1,
            y: tetris.centerPoint.y
          }
          break
      }
      return this.move(tetris, targetPoint)
    }
  }

  /**
   * 将方块组在指定方向上移动到不能移动为止
   * @param tetris 方块组
   * @param direction 移动方向
   */
  static moveDirection(tetris: SquareGroup, direction: MoveDirection): void {
    while (true) {
      if (!this.move(tetris, direction)) {
        return
      }
    }
  }
}
