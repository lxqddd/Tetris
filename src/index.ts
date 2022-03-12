import Square from './core/Square'
import Viewer from './core/Viewer'
const sq = new Square()
sq.viewer = new Viewer(sq)
sq.point = {
  x: 3,
  y: 8
}

sq.point = {
  x: 3,
  y: 10
}
