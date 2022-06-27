import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/picitupfinal.png'
export default function Navbar({ currentUser, handleLogout }) {
  const loggedIn = (
    <React.Fragment>
      <Link to='/'>
        <span onClick={handleLogout}>Log Out</span>
      </Link>

      <Link to='/profile'>Profile</Link>
    </React.Fragment>
  )

  const loggedOut = (
    <React.Fragment>
      <Link to='/register'>Register</Link>
    </React.Fragment>
  )

  return (
    <nav className='bg-white   text-white border-gray-200 px-2 sm:px-10 py-2.5  dark:bg-gray-800'>
      <div className='container flex flex-wrap justify-evenly items-center mx-auto'>
        <Link to='/'>User App</Link>
        <Link to='/'>
          <img width='150' src={image} alt={image} />
        </Link>

        {currentUser ? loggedIn : loggedOut}
      </div>
    </nav>
  )
}
