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
    <div className=" ">
      <div className="m-10">
        <div className={blurToggle ? 'blur ' : null}>
          <img
            onClick={() => {
              setModalToggle(!modalToggle)
              setBlurToggle(!blurToggle)
            }}
            className="border bg-gray-200 shadow-2xl"
            src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_450,h_250,c_scale/${cloudId}.png`}
            alt="cloudId"
          />

          {currentUser.name ? (
            <p>
              {currentUser.name}: {caption}
            </p>
          ) : null}
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
    </div>
  )
}
