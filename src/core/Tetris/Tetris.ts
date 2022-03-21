import { IPoint, Shape } from '../types'
import { getRandom } from '../../utils/index'
import SquareGroup from '../Square/SquareGroup'

/**
 * T形
 */
export const TShape: Shape = [
  { x: 0, y: -1 },
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 }
]

/**
 * L形
 */
export const LShape: Shape = [
  { x: -3, y: 0 },
  { x: -2, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 }
]

/**
 * 反向L形
 */
export const LMirrorShape: Shape = [
  { x: 3, y: 0 },
  { x: 2, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: -1 }
]

/**
 * S形
 */
export const SShape: Shape = [
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 1 }
]

/**
 * 反向S形
 */
export const SMirrorShape: Shape = [
  { x: -1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 }
]

/**
 * 方块形
 */
export const SquareShape: Shape = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 0, y: 1 }
]

/**
 * 直线形
 */
export const LineShape: Shape = [
  { x: 0, y: -1 },
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 }
]

/**
 * 俄罗斯方块的形状
 */
export const shapes: Shape[] = [
  TShape,
  SShape,
  SMirrorShape,
  LShape,
  LMirrorShape,
  LineShape,
  SquareShape
]

/**
 * 俄罗斯方块的颜色
 */
export const colors: string[] = ['red', 'yellow', 'skyblue', 'orange']

/**
 * 随机生成一个俄罗斯方块
 * @param centerPoint 中心点
 * @returns tetris
 */
export const createTetris = (centerPoint: IPoint) => {
  let randomShape = getRandom(0, shapes.length)
  const shape = shapes[randomShape]
  const randomColor = getRandom(0, colors.length)
  const color = colors[randomColor]
  const tetris = new SquareGroup(shape, centerPoint, color)
  return tetris
}
