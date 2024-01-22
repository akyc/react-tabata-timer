import { createSlice } from '@reduxjs/toolkit'

export const tabataSlice = createSlice({
  name: 'tabata',
  initialState: {
    rounds: 8,
    workTime: '00:00:20',
    restTime: '00:00:10',
  },
  reducers: {
    setTabata: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
})

console.log(tabataSlice)
export const { setTabata } = tabataSlice.actions

export const selectTimer = (state) => state

export default tabataSlice.reducer
