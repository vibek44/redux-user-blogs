import React, { useState } from 'react'
import Notification from './components/Notification'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import MenuLink from './components/MenuLink'
import Home from './components/Home'
import Users from './components/Users'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import { useUser } from './customHooks/index'

const App = () => {
  const navigate = useNavigate()
  const [credential, setCredential] = useState(null)

  const user = useUser(credential)
  console.log(user)

  const handleLogin = async (credentials) => {
    setCredential(credentials)
    navigate('/')
  }

  return (
    <div>
      <Notification />
      <h2>Bloglist App</h2>

      <MenuLink user={user} />
      <Routes>
        <Route
          path='/users'
          element={user ? <Users user={user} /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={<LoginForm handleLogin={handleLogin} />}
        />
        <Route path='/blogs' element={<Blogs user={user} />}></Route>
        <Route path='/' element={<Home user={user} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
