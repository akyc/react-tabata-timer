import { createSlice } from '@reduxjs/toolkit'
import { sounds } from '../utils/constants'
import { secondsToString } from '../utils/helpers'

const initialState = [
  {
    id: 'default',
    name: 'Твой первый таймер 👋🏻',
    rounds: 8,
    workTime: secondsToString(20),
    restTime: secondsToString(10),
    prepareTime: 3,
    sounds: {
      short: sounds.beep,
      long: sounds.horn,
    },
    notRemovable: true,
  },
]
export const tabataSlice = createSlice({
  name: 'tabata',
  initialState,
  reducers: {
    addTimer: (state, action) => [action.payload, ...state],
    removeTimer: (state, action) => [...state.filter((timer) => timer.id !== action.payload)],
  },
})

export const { addTimer, removeTimer } = tabataSlice.actions

export const selectTabata = (state) => state.tabata

export default tabataSlice.reducer
