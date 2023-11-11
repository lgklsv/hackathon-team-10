import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type MenuSliceState = {
  isOpen: boolean
}

const initialState: MenuSliceState = {
  isOpen: true
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})

export const { setModal } = menuSlice.actions
