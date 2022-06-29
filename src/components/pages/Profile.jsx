import { useState, useEffect } from 'react'
import axios from 'axios'
import FileUploadForm from '../FileUploadForm'
import { MailIcon, PhotographIcon } from '@heroicons/react/outline'

export default function Profile({
  currentUser: { name, email, _id },
  handleLogout,
}) {
  // state for the secret message for user priv data
  const [msg, setMsg] = useState('')
  const [modalToggle, setModalToggle] = useState(false)

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

  const modalButton = (
    <button onClick={() => setModalToggle(!modalToggle)}>
      Upload a picture
    </button>
  )

  return (
    <div>
      <div className='h-fit mt-10 bg-white flex flex-col justify-center items-center'>
        <div className='bg-gray-100 rounded-xl mb-5 border-gray-300 w-200 p-10 flex flex-col items-center shadow-lg'>
          <h1 className='font-bold'>Hello, {name}</h1>

          <form className='flex items-center space-x-8'>
            <div className='shrink-0'>
              <img
                className='h-40 w-40 object-cover rounded-full'
                src='avataricon.png'
                alt='profileplacholder'
              />
            </div>
            <input
              id='profilePic'
              type='file'
              accept='.png, .jpg, .jpeg'
              className='hidden block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-300'
            />
            <label htmlFor='profilePic'>Upload a Profile Picture</label>
          </form>

          <table className='border-gray-300'>
            <tbody>
              <tr>
                <td className='p-2 border-gray-300'>
                  <MailIcon className='h-6 w-6 text-purple-500' />
                </td>
                <td className='p-2 border-grey-300 font-bold'>{email}</td>
              </tr>
            </tbody>
          </table>

          <div className='mt-10 flex flex-col justify-center items-center'>
            <h2 className='font-bold underline underline-offset-4'>
              {' '}
              User bio{' '}
            </h2>
            <h3>{msg}</h3>
          </div>
        </div>
      </div>

      {modalToggle ? (
        <FileUploadForm
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          userId={_id}
        />
      ) : null}

      <div className='bg-gray-100 rounded-xl mb-3 mx-5 p-5 flex flex-col items-center shadow-lg'>
        <h1 className='font-bold text-center underline underline-offset-8 mb-3'>
          {' '}
          Your Posts{' '}
        </h1>
      </div>

      {modalButton}

      <div className='grid grid-cols-3'>
        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>

        <div className='bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg'>
          <PhotographIcon className='m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44' />
        </div>
      </div>
    </div>
  )
}
