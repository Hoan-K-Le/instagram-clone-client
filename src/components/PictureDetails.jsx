// *user looking at the picture that isnt the current user*

// display the details of a single picture (picture, caption)
// edit inline caption of picture // MAKE SURE THAT THE PICTURE BELONGS TO CURRENTUSER

// display all of the comments on the picture

// needs a comment form
// inline edit input for editing the comment

import React from 'react'

export default function PictureDetails({ picture }) {
  //change content to caption after wiping DB
  return (
    <div>
      <h1>{picture.cloudId}</h1>
      <p>{picture.content}</p>
    </div>
  )
}
