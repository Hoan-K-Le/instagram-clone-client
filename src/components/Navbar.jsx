

import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/picitupfinal.png'
import { useState } from 'react'


export default function Navbar({ currentUser, handleLogout }) {
  const [toggleDrop, setToggleDrop] = useState(false)
  const logOutAndCloseNav = () => {
    setToggleDrop(!toggleDrop)
    handleLogout()
  }
  const loggedIn = (
    <React.Fragment>
      <div className="mx-auto bg-gray-800 font-arial pt-1 pb-3 flex flex-wrap justify-between items-center m-0 w-screen px-5">
        <Link to="/">
          <img width="150" src={image} alt={image} />
        </Link>
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown"
          onClick={() => setToggleDrop(!toggleDrop)}
          className="relative text-white focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
          type="button"
        >

          {currentUser ? (

            currentUser.profilePicture ? (
              <img
                className="w-12 h-12 rounded-full border"
                src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${currentUser.profilePicture}.png`}
                alt="user"
              />
            ) : (
              <img
                className="w-12 h-12 rounded-full border"
                src="http://placekitten.com/200/300"
                alt="cats"
              />
            )
          ) : (
            <div>Loading...</div>
          )}

        </button>

        <div
          id="dropdown"
          className={
            toggleDrop
              ? `z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 absolute mt-8 top-10 right-8 `
              : `hidden z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 absolute top-20`
          }
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefault"
          >
            <li>
              <a

                href='/profile'

                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-500 dark:hover:text-violet-400'

              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/users"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-500 dark:hover:text-violet-400"
              >
                All Users
              </a>
            </li>



            <li className='hover:cursor-pointer '>
              <Link to='/'>
                <span onClick={logOutAndCloseNav}>
                  <p className='font-bold ml-4 pt-2 pb-1 transition duration-500 hover:text-blue-400'>

                    Log Out
                  </p>
                </span>
              </Link>
              {/* <span className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                Logout
              </span> */}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
  return <React.Fragment>{currentUser ? loggedIn : null}</React.Fragment>
}
