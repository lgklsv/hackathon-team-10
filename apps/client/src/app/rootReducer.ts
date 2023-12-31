import { combineReducers } from '@reduxjs/toolkit'

import { mazeSlice } from '@/entities/maze'
import { menuSlice } from '@/entities/menu'
import { victoryModalSlice } from '@/entities/victory_modal'
import { baseApi } from '@/shared/api'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [mazeSlice.name]: mazeSlice.reducer,
  [menuSlice.name]: menuSlice.reducer,
  [victoryModalSlice.name]: victoryModalSlice.reducer
})
