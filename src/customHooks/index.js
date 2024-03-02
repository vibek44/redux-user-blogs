import React from 'react'
import { useState } from 'react'

export const useUser = () => {
  const [user, setUser] = useState(null)

  return { user }
}

export const useField = () => {
  const [value, setValue] = useState('')

  return {
    type,
    value,
    onChange,
  }
}
