import React from 'react'
import { Link } from 'react-router-dom'
import image from "../images/picitupfinal.png"
export default function Navbar({ currentUser, handleLogout }) {
  const loggedIn = (
    <React.Fragment>
      <Link to="/">
        <span onClick={handleLogout}>Log Out</span>
      </Link>
<<<<<<< HEAD
      {' || '}
      <Link to="/profile">Profile</Link>
=======

      <Link to='/profile'>Profile</Link>

>>>>>>> 7f1a598d7a3a834988d5b6b4d22027628e9e9724
    </React.Fragment>
  )

  const loggedOut = (
    <React.Fragment>
<<<<<<< HEAD
      <Link to="/register">Register</Link>
      {' || '}
=======
      <Link to='/register'>Register</Link>


>>>>>>> 7f1a598d7a3a834988d5b6b4d22027628e9e9724
    </React.Fragment>
  )

  return (
    <nav className="bg-white   text-white border-gray-200 px-2 sm:px-10 py-2.5  dark:bg-gray-800">
      <div class="container flex flex-wrap justify-evenly items-center mx-auto">
<<<<<<< HEAD
        <Link to="/">User App</Link>
        {' || '}
=======
      <Link to='/'>User App</Link>
      <Link to='/'>
        <img width="150" src={image}/>
      </Link>
>>>>>>> 7f1a598d7a3a834988d5b6b4d22027628e9e9724

        {currentUser ? loggedIn : loggedOut}
      </div>
    </nav>
  )
}
