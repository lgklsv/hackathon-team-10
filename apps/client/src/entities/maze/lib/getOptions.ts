export function getOptions(
  x: number,
  y: number,
  maze: Maze,
  visited: MazeVisited
) {
  const options = []
  const cell = maze[x][y]
  const rows = maze.length
  const cols = maze[0].length

  // can go south
  if (x + 1 < rows && !visited[x + 1][y] && cell[2] === 1) {
    options.push([x + 1, y])
  }

  // can go east
  if (y + 1 < cols && !visited[x][y + 1] && cell[1] === 1) {
    options.push([x, y + 1])
  }

  // can go west
  if (y - 1 >= 0 && !visited[x][y - 1] && cell[3] === 1) {
    options.push([x, y - 1])
  }

  // can go north
  if (x - 1 >= 0 && !visited[x - 1][y] && cell[0] === 1) {
    options.push([x - 1, y])
  }

  return options
}
