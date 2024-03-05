import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: '',
  reducers: {
    addNotification(state, action) {
      return action.payload
    },
  },
})

export const { addNotification } = notificationSlice.actions

export const setNotification = (notification) => {
  return (dispatch) => {
    dispatch(addNotification(notification))
    setTimeout(() => {
      dispatch(addNotification(''))
    }, 3000)
  }
}

export default notificationSlice.reducer
