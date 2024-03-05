import React from 'react'

const Users = ({ user }) => {
  if (user) return <p>user view welcome {user.username}</p>
  return <p>soon..</p>
}

export default Users
