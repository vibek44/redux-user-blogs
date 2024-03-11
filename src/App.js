import React, { useState } from 'react'
import Notification from './components/Notification'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import MenuLink from './components/MenuLink'
import Home from './components/Home'
import Users from './components/Users'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import Footer from './components/Footer'
import BlogForm from './components/BlogForm'
import { useDispatch } from 'react-redux'
import { removeUser } from './reducers/userReducer'
import { useHooks } from './customHooks/index'
import { createBlogs, updateLikes, removeBlog } from './reducers/blogReducer'

const App = () => {
  const dispatch = useDispatch()
  const [credential, setCredential] = useState(null)
  const { user, blogs, notification } = useHooks(credential)

  const handleLogin = async (credentials) => {
    setCredential(credentials)
  }

  const handleLogOut = () => {
    dispatch(removeUser(null))
  }

  const createBlog = async (blogObject) => {
    dispatch(createBlogs(blogObject))
  }

  const handleLike = (blogObject) => {
    const updatedObject = {
      ...blogObject,
      likes: blogObject.likes + 1,
      user: blogObject.user.id,
    }
    dispatch(updateLikes(updatedObject))
  }

  const handleRemove = (id) => {
    dispatch(removeBlog(id))
  }

  return (
    <div>
      <Notification notification={notification} />
      <h2>Bloglist App</h2>

      <MenuLink user={user} handleLogOut={handleLogOut} />
      <Routes>
        <Route
          path='/users'
          element={user ? <Users user={user} /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={<LoginForm handleLogin={handleLogin} />}
        />
        <Route
          path='/blogs'
          element={
            <Blogs
              user={user}
              blogs={blogs}
              handleLike={handleLike}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path='/create'
          element={user && <BlogForm createBlog={createBlog} />}
        />
        <Route path='/' element={<Home user={user} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
