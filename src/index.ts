import $ from 'jquery'
import Square from './core/Square/Square'
import Viewer from './core/Viewer/Viewer'
import './style/index.scss'

const square = new Square()
const viewer = new Viewer(square, $('#app'))
square.viewer = viewer

square.point = {
  x: 3,
  y: 5
}

square.color = 'red'

let timer: any = null

timer = setInterval(() => {
  if (square.point.x > 10) {
    clearInterval(timer)
    return
  }
  square.point = {
    x: square.point.x + 1,
    y: square.point.y
  }
}, 1000)
