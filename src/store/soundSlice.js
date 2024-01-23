import { createSlice } from '@reduxjs/toolkit'
import { sounds } from '../utils/constants'

export const soundSlice = createSlice({
  name: 'sound',
  initialState: {
    short: sounds.beep,
    long: sounds.horn,
  },
  reducers: {
    setShort: (state, action) => ({
      ...state,
      short: action.payload,
    }),
    setLong: (state, action) => ({
      ...state,
      long: action.payload,
    }),
  },
})
export const { setShort, setLong } = soundSlice.actions

export const selectSound = (state) => state.sound
export default soundSlice.reducer
