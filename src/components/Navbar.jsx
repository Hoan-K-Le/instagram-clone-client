import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
  const loggedIn = (
    <React.Fragment>
      <Link to="/">
        <span onClick={handleLogout}>Log Out</span>
      </Link>
      {' || '}
      <Link to="/profile">Profile</Link>
    </React.Fragment>
  )

  const loggedOut = (
    <React.Fragment>
      <Link to="/register">Register</Link>
      {' || '}

      <Link to="/login">Log In</Link>
    </React.Fragment>
  )

  return (
    <nav>
      <Link to="/">User App</Link>
      {' || '}

      {currentUser ? loggedIn : loggedOut}
    </nav>
  )
}
