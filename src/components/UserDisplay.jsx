// display username, and the most recent picture, and profile photo

import React from 'react'

export default function UserDisplay({ user: { name, pictures }, user }) {
  //change content to caption after wiping DB
  const mostRecentPic = pictures[pictures.length - 1]

  return (
    <div>
      <h1 className='text-center'>{user.name}!</h1>
      <div className='border-black items-center border bg-gray-100 flex justify-center'>
        <img
          width='300px'
          src={`https://res.cloudinary.com/dshcawt4j/image/upload/w_310,h_200,c_scale/${mostRecentPic.cloudId}.png`}
          alt='place'
        />
      </div>
    </div>
  )
}
