import { createSlice } from '@reduxjs/toolkit'
import { sounds } from '../utils/constants'

export const tabataSlice = createSlice({
  name: 'tabata',
  initialState: [
    {
      id: 0,
      name: 'Твой первый таймер 👋🏻',
      rounds: 8,
      workTime: 20,
      restTime: 10,
      prepareTime: 3,
      sounds: {
        short: sounds.beep,
        long: sounds.horn,
      },
      removable: false,
    },
  ],
  reducers: {
    addTimer: (state, action) => [...state, action.payload],
  },
})

export const { addTimer } = tabataSlice.actions

export const selectTabata = (state) => state.tabata

export default tabataSlice.reducer
