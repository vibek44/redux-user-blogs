//import React from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/login'

const verifyUser = (credential) => {
  const request = axios.post(baseUrl, credential)
  return request.then((res) => res.data)
}

export default { verifyUser }
