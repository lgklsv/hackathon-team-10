import { createSlice } from '@reduxjs/toolkit'

import { genMap } from '../lib/generateMap'

// const DIRECTIONS: Direction[] = ['n', 's', 'e', 'w']

enum MazeDifficulty {
  easy = 10,
  medium = 15,
  hard = 25
}

type MazeSliceState = {
  difficulty: MazeDifficulty
  width: number
  height: number
  mazeMap: MazeCell[][]
}

const initialState: MazeSliceState = {
  difficulty: MazeDifficulty.easy,
  width: 500,
  height: 500,
  mazeMap: genMap(500, 500)
}

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    initMaze: () => {
      // const cellSize = state.width / state.difficulty
      // maze = new Maze(difficulty, difficulty)
      // draw = new DrawMaze(maze, ctx, cellSize, finishSprite)
      // player = new Player(
      //   maze,
      //   mazeCanvas,
      //   cellSize,
      //   displayVictoryMess,
      //   sprite
      // )
    },
    resetMaze: () => initialState
  }
})

export const { resetMaze } = mazeSlice.actions
