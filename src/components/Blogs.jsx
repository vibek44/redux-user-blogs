import React from 'react'

const Blogs = ({ user }) => {
  if (user) return <p>welcome {user.username}</p>
  return <h1>Blogs view</h1>
}

export default Blogs
