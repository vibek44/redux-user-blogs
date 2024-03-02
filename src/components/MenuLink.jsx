import React from 'react'
import { Link } from 'react-router-dom'

const MenuLink = ({ user }) => {
  const Style = {
    paddingRight: 5,
  }
  return (
    <div>
      <Link style={Style} to='/'>
        Home
      </Link>
      <Link style={Style} to='/blogs'>
        Blogs
      </Link>
      <Link style={Style} to='/users'>
        users
      </Link>
      {user ? (
        <em>{user} logged in</em>
      ) : (
        <Link style={Style} to='/login'>
          login
        </Link>
      )}
    </div>
  )
}

export default MenuLink
