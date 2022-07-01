import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserDisplay from '../UserDisplay'

// display of the users
const serverUrl = `${process.env.REACT_APP_SERVER_URL}`

export default function Users({ currentUser }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api-v1/users`)
        // console.log(response.data)
        setUsers(response.data)
      } catch (err) {
        console.warn('errrr', err)
      }
    }
    getUsers()
  }, [])

  const allUsers = users.map(user => {
    const { pictures } = user

    return (
      <React.Fragment key={user._id}>
        {currentUser.id !== user._id ? (
          <div>
            {pictures.length !== 0 ? (
              <div key={user._id}>
                <Link to={`/users/${user._id}`}>
                  <UserDisplay user={user} />
                </Link>
              </div>
            ) : null}
          </div>
        ) : null}
      </React.Fragment>
    )
  })

  return (
    <div>
      {/* <h1 className="text-center text-3xl font-sans p-10">List of Users:</h1> */}
      <div className='min-h-screen px-8 py-16 bg-white'>
        <div className='grid gap-8 items-start justify-center'>
          <div className='relative'>
            <div className='absolute inset-1 bg-gray-600 blur-xl'></div>
            <div className=' relative px-7 py-4  bg-black rounded-lg leading-none flex items-center'>
              <span className='flex items-center space-x-5'></span>
              <span className='text-gray-100 text-xl'>List Of Users</span>
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-3 '>{allUsers}</div>
      </div>
    </div>
  )
}

// use UserDisplay.jsx to map through and display each individual user

// make sure that the currentUser's profile is NOT displayed
