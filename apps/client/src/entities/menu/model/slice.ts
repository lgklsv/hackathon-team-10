import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenuSliceState = {
  isOpen: boolean
}

const initialState: MenuSliceState = {
  isOpen: false
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpen = payload
    }
  }
})

export const { setModal } = menuSlice.actions
