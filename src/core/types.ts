/**
 * 方块坐标接口
 */
export interface IPoint {
  /**
   * 横坐标
   */
  readonly x: number
  /**
   * 纵坐标
   */
  readonly y: number
}

/**
 * 显示者接口
 */
export interface IViewer {
  /**
   * 控制显示
   */
  show(): void
  /**
   * 控制删除
   */
  remove(): void
}

/**
 * 小方块显示接口
 */
export interface ISquare {
  /**
   * 小方块宽度
   */
  width: number
  /**
   * 小方块高度
   */
  height: number
  /**
   * 小方块边框
   */
  border: string
}

/**
 * 形状
 */
export type Shape = IPoint[]
