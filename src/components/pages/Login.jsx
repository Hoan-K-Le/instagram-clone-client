import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate, Link } from 'react-router-dom'
import video from '../../images/background.mp4'
import image from '../../images/picitupfinal.png'

const serverUrl = `${process.env.REACT_APP_SERVER_URL}`

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
      const decoded = jwt_decode(token)``
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
      <video
        src={video}
        autoPlay
        loop
        muted
        className="fixed overflow-hidden max-w-[2400px]"
      ></video>
      <div className="overflow-hidden bg-gray-100 flex flex-col justify-center items-center">
        <div className=" bg-gray-100 flex flex-col justify-center items-center h-screen">
          <div className=" mb-3 relative border-gray-300 w-80 pt-8 pb-5 flex flex-col items-center bg-gray-200">
            <img width="250" src={image} alt="pic" />

            <p>{msg}</p>

            <form
              className="w-64 flex flex-col gap-1 mt-5 bg-gray-200"
              onSubmit={handleSubmit}
            >
              {/* <label htmlFor="email">Email: </label> */}
              <input
                className="w-full rounded border bg-gray-100 p-2 text-xs font-bold text-center "
                type="email"
                id="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
              />

              {/* changed the type to show password with text, otherwise hide password */}
              {/* <label htmlFor="password">Password: </label> */}
              <input
                className="w-full rounded border bg-gray-100 p-2 text-xs text-center font-bold"
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
              />

              {/* show/hide password */}
              <button
                onClick={e => pressShow(e)}
                className="relative left-20 bottom-8 focus:text-gray-500 text-sm font-semibold mx-24 px-8 hover:animate-pulse"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>

              <button
                className="mt-2 text-sm text-center bg-blue-500 text-white py-1 rounded font-medium hover:animate-pulse"
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
            <span className=" flex  justify-center flex-col mt-1 font-sans text-xl hover:animate-pulse">
              <Link to="/register">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
