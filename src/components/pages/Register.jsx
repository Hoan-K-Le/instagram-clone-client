import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'
import video from '../../images/background.mp4'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Register({ currentUser, setCurrentUser }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('log the user in')
    try {
      const reqBody = { name, email, password }

      const res = await axios.post(
        `${serverUrl}/api-v1/users/register`,
        reqBody
      )

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
      <div className='relative overflow-hidden bg-gray-100 flex flex-col justify-center items-center h-screen'>
        <video src={video} autoPlay loop muted className='absolute'></video>
        <div className='bg-gray-200 mb-3 border-gray-300 w-80 pt-8 pb-5 flex flex-col items-center relative'>
          <h1 className='p-2 text-xl text-gray-600  text-center font-sans'>
            Sign up to see photos and videos from your friends
          </h1>

          <p>{msg}</p>

          <form
            className='w-64 flex flex-col gap-1 mt-5'
            onSubmit={handleSubmit}
          >
            {/* <label htmlFor="name">Name: </label> */}

            <input
              className='w-full rounded border bg-gray-100 p-2 text-xs text-center font-bold'
              type='text'
              id='name'
              placeholder='Full Name'
              onChange={e => setName(e.target.value)}
            />

            {/* <label htmlFor="email">Email: </label> */}
            <input
              className='w-full rounded border bg-gray-100 p-2 text-xs text-center font-bold'
              type='email'
              id='email'
              placeholder='Email'
              onChange={e => setEmail(e.target.value)}
            />

            {/* <label htmlFor="password">Password: </label> */}
            <input
              className='w-full rounded border bg-gray-100 p-2 text-xs text-center font-bold'
              type='password'
              id='password'
              placeholder='Password'
              onChange={e => setPassword(e.target.value)}
            />
            <br></br>
            <span className=' text-xs text-center'>
              People who use our service may have uploaded your contact
              information to Pic-it-Up.{' '}
              <a className='font-bold' href='#0'>
                Learn More
              </a>
            </span>
            <span className=' text-xs text-center'>
              {' '}
              <br></br>
              By signing up, you agree to our{' '}
              <a className='font-bold' href='#0'>
                Terms
              </a>
              ,
              <a className='font-bold' href='#0'>
                Data
              </a>
              ,
              <a className='font-bold' href='#0'>
                Policy
              </a>
              , and{' '}
              <a className='font-bold' href='#0'>
                Cookies Policy.
              </a>
            </span>
            <br />
            <span className=' text-xs text-center'>
              <p>
                Already have an account? <a href='/'>Login!</a>
              </p>
            </span>

            <button
              className='mt-2 text-sm text-center bg-blue-500 text-white py-1 rounded font-medium hover:animate-pulse'
              type='submit'
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// document.getElementById('nothing').addEventListener('click', function (event) {
//   event.preventDefault()
// })
