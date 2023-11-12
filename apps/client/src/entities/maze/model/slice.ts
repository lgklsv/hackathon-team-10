import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { generateMaze } from '../lib'

export enum MazeDifficulty {
  easy = 10,
  medium = 15,
  hard = 25
}

export enum MazeStatus {
  playing = 'playing',
  won = 'won'
}

type PlayerCoordinates = [number, number]

const INITIAL_PLAYER_POSITION: PlayerCoordinates = [0, 0]

type MazeSliceState = {
  status: MazeStatus
  difficulty: MazeDifficulty
  playerPosition: PlayerCoordinates
  maze: Maze
  solutionMode: boolean
}

const initialState: MazeSliceState = {
  status: MazeStatus.playing,
  difficulty: MazeDifficulty.easy,
  playerPosition: INITIAL_PLAYER_POSITION,
  maze: generateMaze(MazeDifficulty.easy, MazeDifficulty.easy),
  solutionMode: false
}

export const mazeSlice = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    setMazeDifficulty: (state, { payload }: PayloadAction<MazeDifficulty>) => {
      state.difficulty = payload
      state.playerPosition = INITIAL_PLAYER_POSITION

      const size = payload
      state.maze = generateMaze(size, size)

      state.status = MazeStatus.playing
    },
    setPlayerPosition: (
      state,
      { payload }: PayloadAction<PlayerCoordinates>
    ) => {
      state.playerPosition = payload
    },
    restartGame: (state) => {
      state.playerPosition = INITIAL_PLAYER_POSITION

      const size = state.difficulty
      state.maze = generateMaze(size, size)
      state.solutionMode = false

      state.status = MazeStatus.playing
    },
    restartLevel: (state) => {
      state.playerPosition = INITIAL_PLAYER_POSITION
    },
    movePlayer: (state, { payload }: PayloadAction<string>) => {
      if (state.status !== MazeStatus.playing) return

      const [i, j] = state.playerPosition
      if (
        (payload === 'ArrowUp' || payload === 'KeyW') &&
        state.maze[i][j][0] === 1
      ) {
        state.playerPosition = [i - 1, j]
      }
      if (
        (payload === 'ArrowRight' || payload === 'KeyD') &&
        state.maze[i][j][1] === 1
      ) {
        state.playerPosition = [i, j + 1]
      }
      if (
        (payload === 'ArrowDown' || payload === 'KeyS') &&
        state.maze[i][j][2] === 1
      ) {
        state.playerPosition = [i + 1, j]
      }
      if (
        (payload === 'ArrowLeft' || payload === 'KeyA') &&
        state.maze[i][j][3] === 1
      ) {
        state.playerPosition = [i, j - 1]
      }
    },
    setMazeStatus: (state, { payload }: PayloadAction<MazeStatus>) => {
      state.status = payload
    },
    toggleSolutionMode: (state) => {
      state.solutionMode = !state.solutionMode
    },
    resetMaze: () => initialState
  }
})

export const {
  resetMaze,
  setMazeDifficulty,
  setPlayerPosition,
  movePlayer,
  setMazeStatus,
  restartGame,
  restartLevel,
  toggleSolutionMode
} = mazeSlice.actions
