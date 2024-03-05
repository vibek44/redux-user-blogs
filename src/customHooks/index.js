import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UseDispatch, useDispatch } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'
const baseUrl = 'http://localhost:3003/api/login'

export const useUser = (credential) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (credential) {
      axios
        .post(baseUrl, credential)
        .then((res) => {
          //console.log(res.data)
          setUser(res.data)
        })
        .catch((error) => {
          dispatch(setNotification(error.response.data.error))
          navigate('/login')
        })
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
