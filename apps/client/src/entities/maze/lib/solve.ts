import { getOptions } from './getOptions'

export function solve(
  maze: Maze,
  startX = 0,
  startY = 0,
  endX = maze.length - 1,
  endY = maze[0].length - 1
) {
  const visited: boolean[][] = []
  // Mark all cells as unvisited:
  for (let x = 0; x < maze.length; x++) {
    visited[x] = []
    for (let y = 0; y < maze[x].length; y++) {
      visited[x][y] = false
    }
  }

  const solution = []
  let currentX = startX
  let currentY = startY
  let options = []

  while (currentX !== endX || currentY !== endY) {
    visited[currentX][currentY] = true
    options = getOptions(currentX, currentY, maze, visited)

    if (options.length === 0) {
      const [newX, newY] = solution.pop()!
      currentX = newX
      currentY = newY
    } else {
      solution.push([currentX, currentY])
      const [newX, newY] = options[0]
      currentX = newX
      currentY = newY
    }
  }

  solution.push([currentX, currentY])

  return solution
}
