import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// display of the users
const serverUrl = `${process.env.REACT_APP_SERVER_URL}`

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api-v1/users`)
        console.log(response.data)
        setUsers(response.data)
      } catch (err) {
        console.warn('errrr', err)
      }
    }
    getUsers()
  }, [])

  const allUsers = users.map(user => {
    const { _id, name, pictures } = user
    return (
      <li key={_id}>
        <Link to={`/users/${_id}`}>
          {name}
          <img src="https://placekitten.com/200/300" alt="" />
        </Link>
      </li>
    )
  })

  return (
    <div>
      <h1>hello</h1>
      {allUsers}
    </div>
  )
}

// use UserDisplay.jsx to map through and display each individual user

// make sure that the currentUser's profile is NOT displayed
