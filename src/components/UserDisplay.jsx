// display username, and the most recent picture, and profile photo

import React from 'react'

export default function UserDisplay({ user: {name,pictures} }) {
  //change content to caption after wiping DB
  const mostRecentPic = pictures[0]
  return (
    <div>
      <h1>{name}</h1>
      <img src='http://placekitten.com/200/300' alt="place" />
      </div>
  )
}
