import { useState, useEffect } from 'react'
import axios from 'axios'
import FileUploadForm from '../FileUploadForm'
import { MailIcon, PhotographIcon } from '@heroicons/react/outline'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile({
  currentUser: { name, email, id },
  setCurrentUser,
  handleLogout,
}) {
  // state for the secret message for user priv data
  const [userProfile, setUserProfile] = useState({
    pictures: [],
  })
  const [msg, setMsg] = useState('')
  const [modalToggle, setModalToggle] = useState(false)
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

  const modalButton = (
    <button onClick={() => setModalToggle(!modalToggle)}>
      Upload a picture
    </button>
  )

  // https://res.cloudinary.com/demo/image/upload/w_70,h_53,c_scale/turtles.jpg

  const allUserPictures = userProfile.pictures.map(picture => {
    const { cloudId, caption, _id } = picture
    return (
      <div key={_id}>
        <img
          src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${cloudId}.png`}
          alt={cloudId}
        />
        <p>{caption}</p>
      </div>
    )
  })

  return (
    <div>
      <div className="bg-gray-800"></div>
      {modalToggle ? (
        <FileUploadForm
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          userId={id}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      ) : null}
      <div className={modalToggle ? 'blur ' : null}>
        <div className="h-fit mt-10 bg-white flex flex-col justify-center items-center">
          <div className="bg-gray-100 rounded-xl mb-5 border-gray-300 w-200 p-10 flex flex-col items-center shadow-lg">
            <h1 className="font-bold">Hello, {name}</h1>

            <form className="flex items-center space-x-8">
              <div className="shrink-0">
                <img
                  className="h-40 w-40 object-cover rounded-full"
                  src="avataricon.png"
                  alt="profileplacholder"
                />
              </div>
              <input
                id="profilePic"
                type="file"
                accept=".png, .jpg, .jpeg"
                className="hidden block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-300"
              />
              <label htmlFor="profilePic">Upload a Profile Picture</label>
            </form>

            <div>
              <table className="border-gray-300">
                <tbody>
                  <tr>
                    <td className="p-2 border-gray-300">
                      <MailIcon className="h-6 w-6 text-purple-500" />
                    </td>
                    <td className="p-2 border-grey-300 font-bold">{email}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-10 flex flex-col justify-center items-center">
              <h2 className="font-bold underline underline-offset-4">
                {' '}
                User bio{' '}
              </h2>
              <button onClick={handleDelete}>Delete Profile</button>
              <h3>{msg}</h3>
            </div>
          </div>
          <button onClick={handleDelete}>Delete Profile</button>
          <Link to={`/profile/${id}`}>
            <button>Edit Profile</button>
          </Link>
          {/* <button onClick={handleDelete}>Delete Profile</button> */}
        </div>

        <div className="bg-gray-100 rounded-xl mb-3 mx-5 p-5 flex flex-col items-center shadow-lg">
          <h1 className="font-bold text-center underline underline-offset-8 mb-3">
            {' '}
            Your Posts{' '}
          </h1>
        </div>

        {modalButton}
        {allUserPictures}

        <div className="grid grid-cols-3">
          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>

          <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
            <PhotographIcon className="m-auto rounded-lg hover:ring ring-purple-400 object-left-top w-44 h-44" />
          </div>
        </div>
      </div>
    </div>
  )
}
