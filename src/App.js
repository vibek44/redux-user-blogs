import React from 'react'
import Notification from './components/Notification'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuLink from './components/MenuLink'
import Home from './components/Home'
import Footer from './components/Footer'
import { useUser } from './customHooks/index'
const App = () => {
  return (
    <div>
      <Notification />
      <h2>Bloglist App</h2>
      <Router>
        <MenuLink />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
