import { configureStore } from '@reduxjs/toolkit'
import tabataReducer from './tabataSlice'
import soundReducer from './soundSlice'

export default configureStore({
  reducer: {
    tabata: tabataReducer,
    sound: soundReducer,
  },
})
