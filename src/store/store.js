import { configureStore } from '@reduxjs/toolkit'
import tabataReducer from './tabataSlice'
import userReducer from './userSlice'

const persistedState = localStorage.getItem('tabataTimerRu') ? JSON.parse(localStorage.getItem('tabataTimerRu')) : {}
export default configureStore({
  preloadedState: persistedState,
  reducer: {
    tabata: tabataReducer,
    user: userReducer,
  },
})
