import { configureStore } from "@reduxjs/toolkit"
import notificationReducer from "./src/reducers/notificationReducer"

const store = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
})

export default store
