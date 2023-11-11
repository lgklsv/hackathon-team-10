interface MazeCell {
  n: boolean
  s: boolean
  e: boolean
  w: boolean
  visited: boolean
  priorPos: null
}

type Direction = 'n' | 's' | 'e' | 'w'
