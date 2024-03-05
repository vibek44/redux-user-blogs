import React from 'react'
import { useDispatch /*useSelector*/ } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'
import { useField } from '../customHooks'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ handleLogin }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userName = useField('text')
  const passWord = useField('password')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!(userName.value && passWord.value))
      return dispatch(setNotification('username or password is missing'))
    const credentials = {
      username: userName.value,
      password: passWord.value,
    }
    handleLogin(credentials)
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
