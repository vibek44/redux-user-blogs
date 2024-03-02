import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Welcome to Bloglist App</h2>
      <p>
        login to
        <Link to='/login'>
          {' '}
          <em> continue</em>
        </Link>
      </p>
    </div>
  )
}

export default Home
