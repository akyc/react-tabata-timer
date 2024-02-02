import { createSlice } from '@reduxjs/toolkit'
import { sounds } from '../utils/constants'

const initialState = {
  name: 'Андрей',
  secondName: 'Зюзин',
  email: 'azuzin@interprofits.ru',
  phone: '+7 919 964-86-69',
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
})
export const { updateUser } = userSlice.actions

export const selectUser = (state) => state.user
export default userSlice.reducer
