import { useState, useEffect } from 'react'
import axios from 'axios'
import FileUploadForm from '../FileUploadForm'

export default function Profile({
  currentUser: { name, email },
  handleLogout,
}) {
  // state for the secret message for user priv data
  const [msg, setMsg] = useState('')

  // useEffect for getting the user data and checking auth
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the token from local storage
        const token = localStorage.getItem('jwt')
        // make the auth headers
        const options = {
          headers: {
            Authorization: token,
          },
        }
        // hit the auth locked endpoint
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api-v1/users/auth-locked`,
          options
        )
        // set the secret user message in state
        setMsg(res.data.msg)
      } catch (err) {
        console.warn(err)
        // if the error is 401 -- that means the auth failed
        if (err.res) {
          if (err.res.status === 401) {
            handleLogout()
          }
        }
      }
    }
    fetchData()
  })

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Your email is: {email}</p>

      <h2>
        Here is the secret message that is only available to users of User App:{' '}
      </h2>
      <h3>{msg}</h3>
      <FileUploadForm />
    </div>
  )
}
