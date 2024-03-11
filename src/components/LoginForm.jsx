import React from 'react'
import { useDispatch } from 'react-redux'
import { useField } from '../customHooks'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = ({ handleLogin }) => {
  const dispatch = useDispatch()
  const userName = useField('text')
  const passWord = useField('password')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(userName.value && passWord.value)) {
      dispatch(setNotification('username or password missing'))
      setTimeout(() => {
        dispatch(setNotification(''))
      }, 3000)
    } else {
      const credentials = {
        username: userName.value,
        password: passWord.value,
      }
      handleLogin(credentials)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login</legend>
        <div>
          username
          <input {...userName} />
        </div>
        <div>
          password
          <input {...passWord} />
        </div>
        <button name='submitbutton' type='submit'>
          login
        </button>
      </fieldset>
    </form>
  )
}

export default LoginForm
