import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { setUser } from '../reducers/userReducer'
import { setBlogs } from '../reducers/blogReducer'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../requestService/user'
import blogService from '../requestService/blog'

export const useHooks = (credential) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const blogs = useSelector((state) => state.blogs)
  const notification = useSelector((state) => state.notification)

  useEffect(() => {
    //useEffect callback function cant be async

    if (credential) {
      verifyUser(credential)
        .then((data) => {
          dispatch(setUser(data))
          blogService.setToken(data.token)
          navigate('/users')
        })
        .catch((error) => {
          dispatch(setNotification(error.response.data.error))
          setTimeout(() => {
            dispatch(setNotification(''))
          }, 3000)
        })
    }
  }, [credential])

  useEffect(() => {
    if (user) {
      blogService
        .getAll()
        .then((data) => {
          dispatch(setBlogs(data))
        })
        .catch((error) => {
          dispatch(setNotification(error.response.data.error))
          setTimeout(() => {
            dispatch(setNotification(''))
          }, 3000)
        })
    }
  }, [user])

  return { user, blogs, notification }
}

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (e) => {
    setValue(e.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}
