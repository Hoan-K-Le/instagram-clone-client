// displays all of the user's detail to be edited via form

// controlled form in that the user can choose what to edit
import React, { useState } from 'react'

export default function ProfileEditForm({
  currentUser: { name, email, password, _id },
}) {
  const [form, setForm] = useState({
    name,
    email,
    password,
  })

  const editFormSubmit = async e => {
    e.preventDefault()
    console.log('edited')
    try {
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={editFormSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />

        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          id='email'
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />

        <label htmlFor='password'>Password: </label>
        <input
          type='text'
          id='password'
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button>Submit Changes</button>
      </form>
    </div>
  )
}
