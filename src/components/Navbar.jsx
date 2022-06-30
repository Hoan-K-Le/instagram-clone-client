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
      <div className='mx-auto bg-gray-800 font-arial pt-1 pb-3 flex flex-wrap justify-between items-center m-0 w-screen px-5'>
        <Link to='/'>
          <img width='150' src={image} alt={image} />
        </Link>
        <button
          id='dropdownDefault'
          data-dropdown-toggle='dropdown'
          onClick={() => setToggleDrop(!toggleDrop)}
          className='relative text-white focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800'
          type='button'
        >



          {currentUser ? (
            currentUser.profilePicture ? (
              <img
                className='w-12 h-12 rounded-full border'
                src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${currentUser.profilePicture}.png`}
                alt='user'
              />
            ) : (
              <img
                className='w-12 h-12 rounded-full border'
                src='http://placekitten.com/200/300'
                alt='cats'
              />
            )
          ) : (
            <div>Loading...</div>
          )}

        </button>

        <div
          id='dropdown'
          className={
            toggleDrop
              ? `z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 absolute mt-8 top-10 right-8 `
              : `hidden z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 absolute top-20`
          }
        >
          <ul
            className='py-1 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownDefault'
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
                href='/users'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-500 dark:hover:text-violet-400'
              >
                All Users
              </a>
            </li>
            <li  className='hover:cursor-pointer'>
            <Link to='/' >
         <span onClick={logOutAndCloseNav}><p class='font-bold ml-4 pt-2 pb-1 transition duration-500 hover:text-blue-400'>Log Out</p></span>
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

//        -------------     BREAK GLASS IN CASE OF EMERGENCY     ------------
//  if you have any problems with the above code or simply want a more traditional navbar, see code below


// import React from 'react'
// import { Link } from 'react-router-dom'
// import image from '../images/picitupfinal.png'

// export default function Navbar({ currentUser, handleLogout }) {
//   // const loggedIn = (
//   //   <React.Fragment>
//   //     <Link to='/'>
//   //       <span onClick={handleLogout}>Log Out</span>
//   //     </Link>
//   //     <Link to='/'>
//   //             <img width='150' src={image} alt={image} />
//   //           </Link>
//   //     <Link to='/profile'>Profile</Link>
//   //   </React.Fragment>
//   // )

//   // const loggedOut = (
//   //   <React.Fragment>
//   //     <Link to='/register'>Register</Link>
//   //   </React.Fragment>
//   // )
//   const loggedIn = (
//     <React.Fragment>
//       <div >
//       <Link to='/login' >
//         <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Log Out</p></span>
//       </Link>
//       </div>

//       <Link to='/'>
//               <img width='150' src={image} alt={image} />
//             </Link>
//       <Link to='/profile'><p class='font-bold pt-3 transition duration-500 hover:text-violet-500'>Profile</p></Link>
//       {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

// <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
//     <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
//       </li>
//     </ul>
// </div> */}
//     </React.Fragment>
//   )
//   return (
//     <React.Fragment>
//       {currentUser ? (
//         <nav className='bg-white   text-white border-gray-200 px-2 sm:px-10 py-2.5  dark:bg-gray-800'>
//           <div className='container  font-arial pt-3 flex flex-wrap justify-evenly items-center mx-auto '>
//             {/* <Link to='/'>User App</Link> */}

//             {currentUser ? loggedIn : null}
//           </div>
//         </nav>
//       ) : null}
//     </React.Fragment>
//   )
// }

////////////////////////////////////////



// import React from 'react'
// import { Link } from 'react-router-dom'
// import image from '../images/picitupfinal.png'

// export default function Navbar({ currentUser, handleLogout }) {
//   // const loggedIn = (
//   //   <React.Fragment>
//   //     <Link to='/'>
//   //       <span onClick={handleLogout}>Log Out</span>
//   //     </Link>
//   //     <Link to='/'>
//   //             <img width='150' src={image} alt={image} />
//   //           </Link>
//   //     <Link to='/profile'>Profile</Link>
//   //   </React.Fragment>
//   // )

//   // const loggedOut = (
//   //   <React.Fragment>
//   //     <Link to='/register'>Register</Link>
//   //   </React.Fragment>
//   // )
//   const loggedIn = (
//     <React.Fragment>
//       <div >
//       <Link to='/' >
//         <span onClick={handleLogout}><p class=' text-decoration-line: underline font-bold pt-3 transition duration-500 text-violet-500 hover:text-blue-400'>Log Out</p></span>
//       </Link>
//       </div>

//       <Link to='/'>
//               <img width='150' src={image} alt={image} />
//             </Link>
//       <Link to='/profile'><p class=' text-decoration-line: underline font-bold pt-3 transition duration-500 text-violet-500 hover:text-blue-400'>Profile</p></Link>
//       {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

// <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
//     <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
//       </li>
//     </ul>
// </div> */}
//     </React.Fragment>
//   )
//   return (
//     <React.Fragment>
//       {currentUser ? (
//         <nav className='bg-white    border-gray-200 px-2 sm:px-10 py-2.5  dark:bg-gray-100'>
//           <div className='container  font-arial pt-3 flex flex-wrap justify-evenly items-center mx-auto '>
//             {/* <Link to='/'>User App</Link> */}

//             {currentUser ? loggedIn : null}
//           </div>
//         </nav>
//       ) : null}
//     </React.Fragment>
//   )
// }

///////////////////////////////////////////////
