export interface IPoint {
  readonly x: number
  readonly y: number
}

export interface IViewer {
  show(): void
  remove(): void
}

export interface ISquare {
  width: number
  height: number
  border: string
}

export type Shape = IPoint[]
