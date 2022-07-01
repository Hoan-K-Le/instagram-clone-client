import { useState, useEffect } from 'react'
import axios from 'axios'
import FileUploadForm from '../FileUploadForm'
import {
  MailIcon,
  PhotographIcon,
  PencilAltIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile({
  currentUser: { name, email, id },
  setCurrentUser,
  handleLogout,
  currentUser,
}) {
  // state for the secret message for user priv data
  const [userProfile, setUserProfile] = useState({
    pictures: [],
  })
  const [msg, setMsg] = useState('')
  const [modalToggle, setModalToggle] = useState(false)
  const [formImg, setFormImg] = useState(null)
  const [image, setImage] = useState('')
  const navigate = useNavigate()

  const serverUrl = process.env.REACT_APP_SERVER_URL

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api-v1/users/${id}`)
        setUserProfile(res.data)
      } catch (err) {
        console.warn()
      }
    }
    fetchUser()
    // eslint-disable-next-line
  }, [id])

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

  const handleDelete = async e => {
    e.preventDefault()
    try {
      deleteProfile()
      handleLogout()
      setCurrentUser(null)
      navigate('/register')
    } catch (err) {
      console.warn('watch out its an error', err)
    }
  }

  const deleteProfile = async () => {
    try {
      console.log(id)
      await axios.delete(`${serverUrl}/api-v1/users/${id}`)
    } catch (err) {
      console.warn('watchoutitsanerror', err)
    }
  }

  const handleDeletePost = async picId => {
    try {
      deletePost(picId)
      const res = await axios.get(`${serverUrl}/api-v1/users/${id}`)
      setUserProfile(res.data)
    } catch (err) {
      console.warn(err)
    }
  }

  const deletePost = async picId => {
    try {
      await axios.delete(`${serverUrl}/api-v1/pictures/${picId}`)
    } catch (err) {
      console.warn(err)
    }
  }

  // sets the image as soon as it is uploaded
  const picInputChange = async e => {
    console.log('changed')
    setFormImg(e.target.files[0])
  }

  const formSubmit = async () => {
    try {
      // multipart form data object
      const formData = new FormData()
      formData.append('image', formImg)
      const res = await axios.post(
        `${serverUrl}/api-v1/users/${id}/picture`,
        formData
      )
      const userRes = await axios.get(`${serverUrl}/api-v1/users/${id}`)
      setUserProfile(userRes.data)
      setImage(res.data.cloudImage)
      setFormImg(null)
      console.log('upload success')
    } catch (err) {
      console.warn(err)
      setMsg('Check Server Error')
    }
  }

  const modalButton = (
    <button
      className="shadow-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-0.5 hover:scale-110 hover:bg-pink-400 duration-300 flex gap-x-3 row-reverse bg-purple-400 rounded-lg p-3 font-bold text-white mt-2"
      onClick={() => setModalToggle(!modalToggle)}
    >
      Upload a picture <PhotographIcon className="h-5 w-5 text-white" />
    </button>
  )

  if (formImg) {
    formSubmit()
  }

  // https://res.cloudinary.com/demo/image/upload/w_70,h_53,c_scale/turtles.jpg

  const allUserPictures = userProfile.pictures.map(picture => {
    const { cloudId, caption, _id } = picture
    return (
      <div className="flex">
        <div className="bg-gray-100 m-5 rounded-xl shadow-lg" key={_id}>
          <img
            className="pt-8 px-8 pb-2"
            src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_400,h_250,c_scale/${cloudId}.png`}
            alt={cloudId}
          />
          <p className="text-center font-bold">{caption}</p>
          <button
            className='mt-3 ml-64 flex gap-x-2 row-reverse bg-red-500 p-2 rounded-lg mb-3 font-bold text-white hover:-translate-y-0.5 hover:scale-110 hover:bg-orange-400 duration-300'
            onClick={() => handleDeletePost(_id)}
          >
            Delete Picture <TrashIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    )
  })

  return (
    <div>

      <div className='h-fit mt-10 bg-white flex flex-col justify-center items-center'>
        <div className='bg-gray-100 rounded-xl mb-5 border-gray-300 w-200 p-10 flex flex-col items-center shadow-lg'>
          <div className='bg-gray-100 mb-3 rounded-lg'>
            <h1 className='font-bold p-3 px-20 rounded-lg'>
              {name}'s Profile
            </h1>
          </div>

        <div className='bg-gray-300 p-5 rounded-xl'>
          <form onSubmit={formSubmit} className='flex items-center space-x-6'>
            <div className='shrink-0'>
              <img
                className="h-40 w-40 object-cover rounded-full"
                src={
                  userProfile.profilePicture
                    ? `https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${userProfile.profilePicture}.png`
                    : 'avataricon.png'
                }
                alt="profileplacholder"
              />
            </div>
            <input
              id="profilePic"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={picInputChange}
              className="hidden block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-300"
            />

            <label className='bg-white p-2 rounded-lg font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-gray-800 duration-300' htmlFor='profilePic'>
              Upload a Profile Picture
            </label>
          </form>
          </div>
          {/* end of profile image form */}

          <table className="mt-3 border-gray-300">
            <tbody>
              <tr>
                <td className="p-2 border-gray-300">
                  <MailIcon className="h-6 w-6 text-purple-500" />
                </td>
                <td className="p-2 border-grey-300 font-bold">
                  Your Email Address: {email}
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="font-bold underline underline-offset-4">
            Profile Options
          </h2>
          <div className="mt-3 grid grid-cols-2">
            <Link to={`/profile/${id}`}>

              <button className='mr-3 flex gap-x-2 row-reverse shadow-lg transition bg-green-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 p-2 rounded-lg font-bold text-white'>
                Edit Profile <PencilAltIcon className='h-5 w-5 text-white' />{' '}
              </button>
            </Link>
            <button
              className='ml-2 flex gap-x-2 row-reverse shadow-lg transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 p-2 rounded-lg font-bold text-white'
              onClick={handleDelete}
            >
              Delete Profile <TrashIcon className="h-5 w-5 text-white" />{' '}
            </button>
          </div>
        </div>
      </div>

      {modalToggle ? (
        <FileUploadForm
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          userId={id}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      ) : null}

      <div className='flex flex-col items-center'>
        <div className='box-content h-40 w-80 justify-center'>
          <div className='bg-gray-100 rounded-xl mx-5 p-5 flex flex-col items-center shadow-lg'>
            <h1 className='font-bold text-center underline underline-offset-8 mb-2'>
              Your Posts
            </h1>
            {modalButton}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">{allUserPictures}</div>
    </div>
  )
}
