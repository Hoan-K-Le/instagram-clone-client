import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
  const loggedIn = (
    <React.Fragment>
      <Link to='/'>
        <span onClick={handleLogout}>Log Out</span>
      </Link>
      {' || '}
      <Link to='/profile'>Profile</Link>
    </React.Fragment>
  )

  const loggedOut = (
    <React.Fragment>
      <Link to='/register'>Register</Link>
      {' || '}
    </React.Fragment>
  )

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-10 py-2.5 rounded dark:bg-pink-800">

      <Link to='/'>User App</Link>{' || '}
    

      {currentUser ? loggedIn : loggedOut}

    </nav>

  )
}
