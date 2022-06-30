// display username, and the most recent picture, and profile photo

import React from 'react'

export default function UserDisplay({ user: { name, pictures } }) {
  //change content to caption after wiping DB
  // const mostRecentPic = pictures[0]
  return (
    <div className="p-8">
      <h1 className=" p-5 m-2 text-center rounded-lg bg-gray-500 text-white hover:animate-pulse">
        {name}!
      </h1>
      <div className="border-black rounded-3xl items-center border bg-gray-100 flex justify-center">
        <img width="300px" src="http://placekitten.com/200/300" alt="place" />
      </div>
    </div>
  )
}
