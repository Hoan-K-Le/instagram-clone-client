import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserDisplay from '../UserDisplay'
// display of the users
const serverUrl = `${process.env.REACT_APP_SERVER_URL}`

export default function Users() {
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
    return (
      <div key={user._id}>
        <Link to={`/users/${user._id}`}>
          <UserDisplay user={user} />
        </Link>
      </div>
    )
  })

  return <div className="text-4xl grid grid-cols-4 gap-4 ">{allUsers}</div>
}

// use UserDisplay.jsx to map through and display each individual user

// make sure that the currentUser's profile is NOT displayed
