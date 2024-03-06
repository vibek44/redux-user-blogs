import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(action, payload) {
      return initialState
    },
  },
})

export const { setBlogs } = reducers.actions
