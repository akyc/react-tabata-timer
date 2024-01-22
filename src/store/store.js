import { configureStore } from '@reduxjs/toolkit'
import { tabataReducer } from './tabataSlice'

export default configureStore({
  reducer: {
    tabata: tabataReducer,
  },
})
