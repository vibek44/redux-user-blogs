import { createSlice } from '@reduxjs/toolkit'
import blogService from '../requestService/blog'
import { setNotification } from './notificationReducer'

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload
    },
    addBlog(state, action) {
      state.push(action.payload)
    },
    updateBlog(state, action) {
      const id = action.payload.id
      return state.map((blog) => (blog.id !== id ? blog : action.payload))
    },
    deleteBlog(state, action) {
      const id = action.payload
      return state.filter((blog) => blog.id !== id)
    },
  },
})

export const { setBlogs, addBlog, updateBlog, deleteBlog } = blogSlice.actions

export const createBlogs = (blogObject) => {
  return async (dispatch) => {
    try {
      let blog = await blogService.create(blogObject)
      dispatch(addBlog(blog))
    } catch (error) {
      dispatch(setNotification(error.response.data.error))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 3000)
    }
  }
}

export const updateLikes = (blogObject) => {
  return async (dispatch) => {
    try {
      let blog = await blogService.update(blogObject.id, blogObject)
      dispatch(updateBlog(blog))
    } catch (error) {
      dispatch(setNotification(error.response.data.error))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 3000)
    }
  }
}

export const removeBlog = (id) => {
  return async (dispatch) => {
    try {
      await blogService.remove(id)
      dispatch(deleteBlog(id))
    } catch (error) {
      dispatch(setNotification(error.response.data.error))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 3000)
    }
  }
}

export default blogSlice.reducer
