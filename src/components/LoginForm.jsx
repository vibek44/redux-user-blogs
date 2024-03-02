import React from 'react'
import { useDispatch /*useSelector*/ } from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    if (!(username && password))
      dispatch(setNotification('username or password is missing'))

    try {
    } catch (error) {}
    //console.log(e.target.username.value, e.target.password.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Login</legend>
        <div>
          username
          <input name='username' type='text' />
        </div>
        <div>
          password
          <input name='password' type='password' />
        </div>
        <button name='submitbutton' type='submit'>
          login
        </button>
      </fieldset>
    </form>
  )
}

export default LoginForm
