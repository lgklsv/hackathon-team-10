export function genMap(width: number, height: number) {
  const mazeMap = new Array(height)

  for (let y = 0; y < height; y += 1) {
    mazeMap[y] = new Array(width)
    for (let x = 0; x < width; x += 1) {
      mazeMap[y][x] = {
        n: false,
        s: false,
        e: false,
        w: false,
        visited: false,
        priorPos: null
      }
    }
  }

  return mazeMap
}
