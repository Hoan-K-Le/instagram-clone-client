// *user looking at the picture that isnt the current user*

// display the details of a single picture (picture, caption)
// edit inline caption of picture // MAKE SURE THAT THE PICTURE BELONGS TO CURRENTUSER

// display all of the comments on the picture

// needs a comment form
// inline edit input for editing the comment

import { useState } from 'react'
import PictureModal from './PictureModal'

export default function PictureDetails({
  picture: { cloudId, caption },
  userProfile,
  picture,
  userId,
  setUserProfile,
  currentUser,
  blurToggle,
  setBlurToggle,
}) {
  const [modalToggle, setModalToggle] = useState(false)

  return (

    <div
      onClick={() => {
        setModalToggle(!modalToggle)
        setBlurToggle(!blurToggle)
      }}
    >
      <div className={blurToggle ? 'blur ' : null}>
      <img
          onClick={() => {
            setModalToggle(!modalToggle)
            setBlurToggle(!blurToggle)
          }}
          src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${cloudId}.png`}
          alt='cloudId'
        />
        <p>{caption}</p>
      </div>

      {modalToggle ? (
        <PictureModal
          blurToggle={blurToggle}
          setBlurToggle={setBlurToggle}
          setModalToggle={setModalToggle}
          modalToggle={modalToggle}
          name={userProfile.name}
          picture={picture}
          currentUser={currentUser}
          userId={userId}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
      ) : null}
    </div>

  )
}
