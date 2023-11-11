import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type initialState = {
isOpen: boolean
}

const initialState: initialState = {
 isOpen: true
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    }
  }
})


export const {
setModal
} = menuSlice.actions
export default menuSlice

