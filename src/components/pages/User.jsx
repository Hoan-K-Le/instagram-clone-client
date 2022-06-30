// displays a user's profile to a logged in user

// if it is somehow currentUser and the profile id is the same, redirect to their own profile page

import { useState, useEffect } from 'react'
import axios from 'axios'
import { PhotographIcon } from '@heroicons/react/outline'
import { useParams } from 'react-router-dom'
import avatarIcon from '../../images/avataricon.png'
import PictureDetails from '../PictureDetails'
import PictureModal from '../PictureModal'
// blur out bg when modal
export default function User({ currentUser }) {
  // state for the secret message for user priv data
  const [userProfile, setUserProfile] = useState({
    pictures: [],
  })
  // const [pictures, setPictures] = useState([])
  const [modalToggle, setModalToggle] = useState(false)
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
      <div key={picture._id}>
        <PictureDetails
          setModalToggle={setModalToggle}
          modalToggle={modalToggle}
          picture={picture}
        />
        {modalToggle ? (
          <PictureModal
            setModalToggle={setModalToggle}
            modalToggle={modalToggle}
            name={userProfile.name}
            picture={picture}
            currentUser={currentUser}
            userId={id}
            setUserProfile={setUserProfile}
            // setPictures={setPictures}
          />
        ) : null}
      </div>
    )
  })

  return (
    <div>
      <div className={modalToggle ? 'blur ' : null}>
        <div className="h-fit mt-10 bg-white flex flex-col justify-center items-center">
          <div className="flex-col flex items-center t p-2">
            <h1 className="font-bold p-2 text-3xl ">{userProfile.name}</h1>
            <div className="rounded-3xl border p-2 bg-gray-300 mb-10">
              {currentUser ? (
                <img
                  className="w-140 h-140 rounded-full border "
                  src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${currentUser.profilePicture}.png`}
                  alt="user"
                />
              ) : (
                <img src="http://placekitten.com/200/300" alt="cats" />
              )}
            </div>
            {/* <img
              className="h-40 w-40 object-cover rounded-full"
              src={avatarIcon}
              alt="profileplacholder"
            /> */}

            {/* <div className='mt-10 flex flex-col justify-center items-center'>
            <h2 className='font-bold underline underline-offset-4'>
              {' '}
              User bio{' '}
            </h2>
            <h3>{msg}</h3>
          </div> */}
          </div>
        </div>
      </div>
      {/* <div className='bg-gray-100 rounded-xl mb-3 mx-5 p-5 flex flex-col items-center shadow-lg'>
        <h1 className='font-bold text-center underline underline-offset-8 mb-3'>
          {' '}
          Your Posts{' '}
        </h1>
      </div> */}

      <div className={modalToggle ? 'blur ' : null}>
        <div className="rounded-3xl">
          <div className="grid grid-cols-3">
            {allUserPictures}
            {/* <div className="bg-gray-100 rounded-xl mx-5 my-3 border-gray-300 w-100 p-5 flex flex-col items-center shadow-lg">
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
        </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
