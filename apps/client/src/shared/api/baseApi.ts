import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from './baseQuery'

export const baseApi = createApi({
  tagTypes: [],
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({})
})
