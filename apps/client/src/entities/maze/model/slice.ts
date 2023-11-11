import { createSlice } from '@reduxjs/toolkit'

enum MazeDifficulty {
  easy = 10,
  medium = 15,
  hard = 25
}

type MazeSliceState = {
  difficulty: MazeDifficulty
}

const initialState: MazeSliceState = {
  difficulty: MazeDifficulty.easy
}

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    resetMaze: () => initialState
  }
})

export const { resetMaze } = mazeSlice.actions
