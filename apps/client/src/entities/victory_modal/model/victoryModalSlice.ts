import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type VictoryModalSliceState = {
  isVictoryModal: boolean
}

const initialState: VictoryModalSliceState = {
  isVictoryModal: false
}

export const victoryModalSlice = createSlice({
  name: 'victoryModal',
  initialState,
  reducers: {
    setVictoryModal: (state, action: PayloadAction<boolean>) => {
      state.isVictoryModal = action.payload
    }
  }
})

export const { setVictoryModal } = victoryModalSlice.actions
