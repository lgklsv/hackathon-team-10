import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum MazeDifficulty {
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
    setMazeDifficulty: (state, { payload }: PayloadAction<MazeDifficulty>) => {
      state.difficulty = payload
    },
    resetMaze: () => initialState
  }
})

export const { resetMaze, setMazeDifficulty } = mazeSlice.actions
