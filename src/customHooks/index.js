import React, { useEffect, useState } from 'react'
import request from '../requestService/user'
import { useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'

export const useUser = (credential) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
    }
  }, [])
  useEffect(() => {
    if (credential) {
      request
        .verifyUser(credential)
        .then((data) => {
          setUser(data)
          localStorage.setItem('loggedUser', JSON.stringify(data))
        })
        .catch((error) => {
          dispatch(setNotification(error.response.data.error))
          navigate('/login')
        })
    }
  }, [credential])

  useEffect(() => {
    if (credential === null) {
      window.localStorage.removeItem('loggedUser')
      setUser(null)
    }
  }, [credential])

  return user
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
