// display username, and the most recent picture, and profile photo

import React from 'react'

export default function UserDisplay({ user: { name, pictures } }) {
  //change content to caption after wiping DB
  const mostRecentPic = pictures[pictures.length - 1]

  return (
    <div className=" relative  items-center hover:scale-125 font-sans p-10 hover:text-red-500 ">
      <h1 className=" text-center font-bold text-xl mx-28 p-5">{name}!</h1>
      <div className=" shadow-3xl border-black items-center border bg-gray-100 flex h-full overflow-x-hidden justify-center rounded-3xl p-2 mx-10 ">
        <img
          width="300px"
          src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${mostRecentPic.cloudId}.png`}
          alt="place"
        />
      </div>
    </div>

  )

}
