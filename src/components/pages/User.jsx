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

  const allUserPictures = userProfile.pictures.map(picture => {
    return (
      <div key={picture._id} className="flex">
        <div className="bg-gray-100 m-5 rounded-xl shadow-lg" key={picture._id}>
          <PictureDetails
            blurToggle={blurToggle}
            setBlurToggle={setBlurToggle}
            picture={picture}
            setUserProfile={setUserProfile}
            currentUser={currentUser}
            userProfile={userProfile}
            userId={id}
          />
          <p className="text-center font-bold">{caption}</p>
          <button
            className="mt-3 ml-56 flex gap-x-2 row-reverse bg-red-500 p-2 rounded-lg mb-3 font-bold text-white hover:-translate-y-0.5 hover:scale-110 hover:bg-orange-400 duration-300"
            onClick={() => handleDeletePost(_id)}
          >
            Delete Picture <TrashIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className="">
      <div className={blurToggle ? 'blur ' : null}>
        <div className="  bg-white flex flex-col justify-center items-center ">
          <div className="bg-gray-100 rounded-xl mb-5 w-200 p-10 flex flex-col items-center shadow-lg">
            <h1 className="font-bold text-3xl font-sans">{userProfile.name}</h1>
            {userProfile ? (
              userProfile.profilePicture ? (
                <img
                  className="h-40 w-40 object-cover rounded-full"
                  src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${userProfile.profilePicture}.png`}
                  alt="user"
                />
              ) : (
                <img
                  className="h-40 w-40 object-cover rounded-full"
                  src="http://placekitten.com/200/300"
                  alt="cats"
                />
              )
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 ">{allUserPictures}</div>
    </div>
  )
}
