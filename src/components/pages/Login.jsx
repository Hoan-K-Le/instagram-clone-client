import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate, Link } from 'react-router-dom'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Login({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [showPassword, setShowPassword] = useState(false) // set the state to show password as false, where they can't see it, otherwise toggle it to show the text
  const pressShow = e => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

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
    return <Navigate to="/profile" />
  }

  return (
    <div>
      <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white mb-3 border-gray-300 w-80 pt-8 pb-5 flex flex-col items-center">
          <h1>Login to your Account:</h1>

          <p>{msg}</p>

          <form
            className="w-64 flex flex-col gap-1 mt-5"
            onSubmit={handleSubmit}
          >
            {/* <label htmlFor="email">Email: </label> */}
            <input
              className="w-full rounded border bg-gray-100 p-2 text-xs"
              type="email"
              id="email"
              placeholder="Your email..."
              onChange={e => setEmail(e.target.value)}
            />

            {/* changed the type to show password with text, otherwise hide password */}
            {/* <label htmlFor="password">Password: </label> */}
            <input
              className="w-full rounded border bg-gray-100 p-2 text-xs"
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Your Password..."
              onChange={e => setPassword(e.target.value)}
            />

            {/* show/hide password */}
            <button
              onClick={e => pressShow(e)}
              className="relative left-20 bottom-8 focus:text-gray-500 text-sm font-semibold"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>

            <button
              className="mt-2 text-sm text-center bg-blue-500 text-white py-1 rounded font-medium"
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className="flex space-x-2 w-64 mt-4 items-center">
            <span className="bg-gray-300 h-px flex-1" />
            <span className="p-2 uppercase text-xs text-gray-400 font-semibold">
              or
            </span>
            <span className="bg-gray-300 h-px flex-1" />
            <div className="mr-1"></div>
          </div>
          <span className="items-center flex flex-col justify-center mt-1">
            <Link to="/register">Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
