import React from 'react'
import Notification from './components/Notification'
import { Routes, Route, Navigate } from 'react-router-dom'
import MenuLink from './components/MenuLink'
import Home from './components/Home'
import Users from './components/Users'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import { useUser } from './customHooks/index'

const App = () => {
  const { user } = useUser()

  return (
    <div>
      <Notification />
      <h2>Bloglist App</h2>

      <MenuLink user={user} />
      <Routes>
        <Route
          path='/users'
          element={user ? <Users /> : <Navigate replace to='/login' />}
        />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
