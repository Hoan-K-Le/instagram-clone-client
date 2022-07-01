// displays a user's profile to a logged in user

// if it is somehow currentUser and the profile id is the same, redirect to their own profile page

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PictureDetails from '../PictureDetails'

// blur out bg when modal
export default function User({ currentUser }) {
  // state for the secret message for user priv data
  const [userProfile, setUserProfile] = useState({
    pictures: [],
  })
  const [blurToggle, setBlurToggle] = useState(false)
  const { id } = useParams()

  const serverUrl = process.env.REACT_APP_SERVER_URL

  // useEffect for getting the user data and checking auth
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/api-v1/users/${id}`)
        setUserProfile(res.data)
        // setPictures(res.data.pictures)
        // console.log(res.data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchUser()
    // eslint-disable-next-line
  }, [id])

  const allUserPictures = userProfile.pictures.map(picture => {
    return (
      <div key={picture._id} className='flex'>
        <div className='bg-gray-100 m-5 rounded-xl shadow-lg' key={picture._id}>
          <PictureDetails
            blurToggle={blurToggle}
            setBlurToggle={setBlurToggle}
            picture={picture}
            setUserProfile={setUserProfile}
            currentUser={currentUser}
            userProfile={userProfile}
            userId={id}
          />
        </div>
      </div>
    )
  })

  return (
    <div className=''>
      <div className={blurToggle ? 'blur ' : null}>
        <div className='  bg-white flex flex-col justify-center items-center '>
          <div className='bg-gray-100 rounded-xl mb-5 w-200 p-10 flex flex-col items-center shadow-lg'>
            <h1 className='font-bold text-3xl font-sans'>{userProfile.name}</h1>
            {userProfile ? (
              userProfile.profilePicture ? (
                <img
                  className='h-40 w-40 object-cover rounded-full'
                  src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${userProfile.profilePicture}.png`}
                  alt='user'
                />
              ) : (
                <img
                  className='h-40 w-40 object-cover rounded-full'
                  src='http://placekitten.com/200/300'
                  alt='cats'
                />
              )
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 '>{allUserPictures}</div>
    </div>
  )
}
