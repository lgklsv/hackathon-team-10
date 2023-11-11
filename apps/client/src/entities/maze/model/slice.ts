import { createSlice } from '@reduxjs/toolkit'

type MazeSliceState = {}

const initialState: MazeSliceState = {}

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    resetMaze: () => initialState
  }
})

export const { resetMaze } = mazeSlice.actions
