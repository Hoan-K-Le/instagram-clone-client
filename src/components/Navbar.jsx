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






































// import React from 'react'
// import { Link } from 'react-router-dom'
// import image from '../images/picitupfinal.png'


// export default function Navbar({ currentUser, handleLogout, }) {


//   let isVisable = true
// const notVisable = function() {

//    isVisable = false
// }
// const clicked = function() {
//   console.log('clicked')
//   return isVisable = false
// }
//   const loggedIn = (


//       <div className='container  font-arial pt-1 pb-3 flex flex-wrap justify-between items-center mx-auto '>
//         <React.Fragment>

//       <Link to='/'>
//               <img width='150' src={image} alt={image} />
//             </Link>

//       {isVisable ?
//       <div className=' con font-arial  flex flex-wrap justify-between items-center mx-auto '>
//          <Link to='/' >
//          <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Log Out</p></span>
//        </Link>

//        <Link to='/' >
//          <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Log Out</p></span>
//        </Link>
//        <Link to='/' >
//          <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Log Out</p></span>
//        </Link>  </div>
//       : null}

// <button  type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
//         <span   class="sr-only">Open user menu</span>
//         <img class="w-12 h-12 rounded-full border" src="http://placekitten.com/200/300" alt="user photo" />
//       </button>
//         <button onClick={clicked}>button</button>
//     </React.Fragment>
//     </div>
//   )
//   return (
//     <React.Fragment>
//       {currentUser ? (
//         <nav className='bg-white   text-white border-gray-200 px-2 sm:px-10 py-2.5  dark:bg-gray-800'>
//           <div className='container  font-arial pt-3 flex flex-wrap items-center mx-auto '>
//             {/* <Link to='/'>User App</Link> */}
//             {currentUser ? loggedIn : null}
//           </div>
//         </nav>
//       ) : null}
//     </React.Fragment>
//   )
// }








// //////////////////////////////////////////////

// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import image from '../images/picitupfinal.png'

// // export default function Navbar({ currentUser, handleLogout }) {
// //   // const loggedIn = (
// //   //   <React.Fragment>
// //   //     <Link to='/'>
// //   //       <span onClick={handleLogout}>Log Out</span>
// //   //     </Link>
// //   //     <Link to='/'>
// //   //             <img width='150' src={image} alt={image} />
// //   //           </Link>
// //   //     <Link to='/profile'>Profile</Link>
// //   //   </React.Fragment>
// //   // )

// //   // const loggedOut = (
// //   //   <React.Fragment>
// //   //     <Link to='/register'>Register</Link>
// //   //   </React.Fragment>
// //   // )
// //   const loggedIn = (
// //     <React.Fragment>
// //       <div >
// //       <Link to='/' >
// //         <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Log Out</p></span>
// //       </Link>
// //       </div>

// //       <Link to='/'>
// //               <img width='150' src={image} alt={image} />
// //             </Link>
// //             {/* <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
// // //         <span class="sr-only">Open user menu</span>
// // //         <img class="w-12 h-12 rounded-full border" src="http://placekitten.com/200/300" alt="user photo" />
// // //       </button> */}
// //       <Link to='/profile'>
// //       <img class="w-12 h-12 rounded-full border" src="http://placekitten.com/200/300" alt="user photo" />
// //             </Link>

// //       {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

// // <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
// //     <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
// //       <li>
// //         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
// //       </li>
// //       <li>
// //         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
// //       </li>
// //       <li>
// //         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
// //       </li>
// //       <li>
// //         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
// //       </li>
// //     </ul>
// // </div> */}
// //     </React.Fragment>
// //   )
// //   return (
// //     <React.Fragment>
// //       {currentUser ? (
// //         <nav className='bg-white   text-white border-gray-200 px-2 sm:px-10 py-2.5  dark:bg-gray-800'>
// //           <div className='container  font-arial pt-1 flex flex-wrap justify-between items-center mx-auto '>
// //             {/* <Link to='/'>User App</Link> */}


// //             {currentUser ? loggedIn : null}
// //           </div>
// //         </nav>
// //       ) : null}
// //     </React.Fragment>
// //   )
// // }

// export default function Navbar() {
//   const loggedIn = (
//     <React.Fragment>


// </React.Fragment>
//   )
//   return (

//       {loggedIn}

//   )
// }










/////////////////////////////////





import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/picitupfinal.png'
import {useState}  from 'react'

export default function Navbar({ currentUser, handleLogout, }) {

const [isVisable, setisVisable] = useState(true)
const [toggleDrop, setToggleDrop] = useState(true)
const clicked = function() {
  console.log('clicked')
  setisVisable(!isVisable)

}
  const loggedIn = (


      <div className='container  font-arial pt-1 pb-3 flex flex-wrap justify-between items-center mx-auto '>
        <React.Fragment>

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
            <img class="w-12 h-12 rounded-full border" src="http://placekitten.com/200/300" alt="user photo" />{' '}
          </button>

          <div
            id='dropdown'
            className={
              toggleDrop
                ? `z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 absolute mt-5  top-20 right-10 `
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
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href='/users'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  All Users
                </a>
              </li>
              <li onClick={handleLogout} className='hover:cursor-pointer' >

                <span
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>








      {/* {isVisable ?
      <div className=' con font-arial  flex flex-wrap dark:bg-gray-800 justify-evenly items-center mx-auto '>
         <Link to='/' >
         <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Log Out</p></span>
       </Link>
        {<p class='text-gray-800' >--</p>}
       <Link to='/' >
         <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>Settings</p></span>
       </Link>
       {<p class='text-gray-800' >--</p>}
       <Link to='/' >
         <span onClick={handleLogout}><p class='font-bold pt-3 transition duration-500 hover:text-blue-400'>All Users</p></span>
       </Link>  </div>
      : null} */}

{/* <button onClick={clicked} type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" type="button" data-dropdown-toggle="dropdown">
        <span   class="sr-only">Open user menu</span>
        <img class="w-12 h-12 rounded-full border" src="http://placekitten.com/200/300" alt="user photo" />
      </button>
        <button onClick={clicked}>button</button> */}
    </React.Fragment>
    </div>
  )
  return (
    <React.Fragment>
      {currentUser ? (
        <nav className='bg-white   text-white border-gray-200 px-2 justify-between sm:px-10 py-2.5  dark:bg-gray-800'>
          <div className='container  font-arial pt-3 flex flex-wrap items-center mx-auto '>
            {/* <Link to='/'>User App</Link> */}
            {currentUser ? loggedIn : null}
          </div>
        </nav>
      ) : null}
    </React.Fragment>
  )
}
//////////////////
