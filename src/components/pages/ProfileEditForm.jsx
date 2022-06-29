import axios from 'axios'
import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

// displays all of the user's detail to be edited via form

// controlled form in that the user can choose what to edit

const serverUrl = process.env.REACT_APP_SERVER_URL
export default function ProfileEditForm({
  currentUser: { name, email, password, id },
  setCurrentUser,
  picture,
}) {
  const [form, setForm] = useState({
    name,
    email,
    password,
  })
  const navigate = useNavigate()

  const editFormSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.put(`${serverUrl}/api-v1/users/${id}`, form)
      const { token } = res.data
      localStorage.setItem('jwt', token)
      const decoded = jwt_decode(token)
      setCurrentUser(decoded)
      navigate('/profile')
      // const res = axios.get(`${serverUrl}/api-v1/users/${id}`)
      console.log('DID IT WORK? IDK')
    } catch (err) {
      console.warn('watch out its an error for edit form', err)
    }
  }

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={editFormSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Submit Changes</button>
      </form>
      <a href="/profile">
        <button>Cancel</button>
      </a>
    </div>
  )
}
