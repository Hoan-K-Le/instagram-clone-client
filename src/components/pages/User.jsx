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
    <div className=" h-screen border overflow-hidden">
      <div className={modalToggle ? 'blur' : null}>
        <div className="mt-10 justify-center items-center">
          <div className="flex-col flex items-center  p-2">
            <h1 className="font-bold p-3 text-3xl ">{userProfile.name}</h1>
            <div className="rounded-3xl  mb-10">
              {currentUser ? (
                currentUser.profilePicture ? (
                  <img
                    className="w-140 h-140 rounded-3xl border p-2 "
                    src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${currentUser.profilePicture}.png`}
                    alt="user"
                  />
                ) : (
                  <img
                    className="w-140 h-140 rounded-3xl border  border-black shadow-3xl p-10 bg-slate-100"
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
      </div>
      {/* <div className={modalToggle ? 'blur ' : null}> */}
      <div className="grid grid-cols-3  border-black mx-28 rounded-3xl ">
        {allUserPictures}
      </div>
      {/* </div>{' '} */}
      //{' '}
    </div>
  )
}
