import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ currentUser, handleLogout }) {
  const loggedIn = (
    <React.Fragment>
<<<<<<< HEAD
      <Link to="/">
        <span onClick={handleLogout}>Log Out</span>
      </Link>
      {' || '}
      <Link to="/profile">Profile</Link>
=======
      <Link to='/'>
        <span onClick={handleLogout}>Log Out</span>
      </Link>
      {' || '}
      <Link to='/profile'>Profile</Link>
>>>>>>> 7dfc9c1e4e84ddd8dbedfd1114a2c93f365a77fc
    </React.Fragment>
  )

  const loggedOut = (
    <React.Fragment>
<<<<<<< HEAD
      <Link to="/register">Register</Link>
      {' || '}

      <Link to="/login">Log In</Link>
=======
      <Link to='/register'>Register</Link>
      {' || '}
>>>>>>> 7dfc9c1e4e84ddd8dbedfd1114a2c93f365a77fc
    </React.Fragment>
  )

  return (
    <nav>
<<<<<<< HEAD
      <Link to="/">User App</Link>
=======
      <Link to='/'>User App</Link>
>>>>>>> 7dfc9c1e4e84ddd8dbedfd1114a2c93f365a77fc
      {' || '}

      {currentUser ? loggedIn : loggedOut}
    </nav>
  )
}
