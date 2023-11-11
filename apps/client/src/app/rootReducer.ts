import { combineReducers } from '@reduxjs/toolkit'

import { menuSlice } from '@/entities/menu'
import { baseApi } from '@/shared/api'

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [menuSlice.name]: menuSlice.reducer,
})
