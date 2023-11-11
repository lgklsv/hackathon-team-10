import { combineReducers } from '@reduxjs/toolkit'

import { baseApi } from '@/shared/api'
import menuSlice from "@/app/layouts/menuSlice.ts";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  menuSlice: menuSlice.reducer
})
