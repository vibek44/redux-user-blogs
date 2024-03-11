import React from 'react'

const Blogs = ({ user, blogs, handleLike, handleRemove }) => {
  if (user && blogs.length > 0)
    return (
      <>
        <h3>
          welcome <em>{user.username}</em>
        </h3>
        <h4>BlogList</h4>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <p>
              {blog.title}
              <button onClick={() => handleLike(blog)}>like</button>
              <button onClick={() => handleRemove(blog.id)}>delete</button>
            </p>
            <p>likes:{blog.likes}</p>
          </div>
        ))}
      </>
    )
  return <h1>Blogs view</h1>
}

export default Blogs
