// display username, and the most recent picture, and profile photo

import React from 'react'

export default function UserDisplay({ user: { name, pictures } }) {
  //change content to caption after wiping DB
  // const mostRecentPic = pictures[0]
  return (
    <div className="text-center items-center">
      <h1>{name}</h1>

      <img width="300px" src="http://placekitten.com/200/300" alt="place" />
    </div>
  )
}
