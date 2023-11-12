export const selectMazeDifficulty = (state: RootState) => state.maze.difficulty
export const selectPlayerPosition = (state: RootState) =>
  state.maze.playerPosition
export const selectMaze = (state: RootState) => state.maze.maze
export const selectMazeStatus = (state: RootState) => state.maze.status
export const selectIsSolutionMode = (state: RootState) =>
  state.maze.solutionMode
