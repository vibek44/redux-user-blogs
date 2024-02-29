import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: '',
  reducers: {
    addNotification(state, action) {
      return state
    },
  },
})

export const { addNotification } = notificationSlice.actions
export default notificationSlice.reducer
