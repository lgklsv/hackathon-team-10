import { combineReducers } from '@reduxjs/toolkit'

import { menuSlice } from '@/entities/menu'
import { baseApi } from '@/shared/api'
import {victoryModalSlice} from "@/entities/victory_modal";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [menuSlice.name]: menuSlice.reducer,
  [victoryModalSlice.name]: victoryModalSlice.reducer
})
