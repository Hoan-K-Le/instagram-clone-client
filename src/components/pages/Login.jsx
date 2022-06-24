import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Login({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('log the user in')
    try {
      const reqBody = {
        email,
        password,
      }

      const res = await axios.post(`${serverUrl}/api-v1/users/login`, reqBody)

      // save the token in localstorage
      const { token } = res.data
      localStorage.setItem('jwt', token)
      // decode the token
      const decoded = jwt_decode(token)

      // set the user in App's state to be the decoded token
      setCurrentUser(decoded)
    } catch (err) {
      console.warn(err)
      if (err.res) {
        if (err.res.status === 400) {
          setMsg(err.res.data.msg)
        }
      }
    }
  }

  if (currentUser) {
    return <Navigate to='/profile' />
  }

  return (
    <div>
      <h1>Login to your Account:</h1>

      <p>{msg}</p>

      <form onSubmit={handleSubmit}>

        <label htmlFor='email'>Email: </label>
        <input type='email' id='email'
               placeholder='Your email...'
               onChange={e => setEmail(e.target.value)} />

        <label htmlFor='password'>Password: </label>
        <input type='password' id='password'
               placeholder='Your Password...'
               onChange={e => setPassword(e.target.value)} />

        <button type='submit'>Log In</button>
        
      </form>
    </div>
  )
}
