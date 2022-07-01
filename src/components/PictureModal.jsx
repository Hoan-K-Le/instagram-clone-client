import React, { useState } from 'react'
import axios from 'axios'
import Comment from './Comment'

export default function PictureModal({
  picture,
  setModalToggle,
  modalToggle,
  name,
  currentUser,
  userId,
  setUserProfile,

  blurToggle,
  setBlurToggle,
}) {
  const [commentFormData, setCommentFormData] = useState({
    content: '',
    picture,
  })

  const serverUrl = process.env.REACT_APP_SERVER_URL

  const handleCommentSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post(
        `${serverUrl}/api-v1/pictures/${picture._id}/${currentUser.id}/comment`,
        commentFormData
      )
      const userRes = await axios.get(`${serverUrl}/api-v1/users/${userId}`)

      setUserProfile(userRes.data)
      setCommentFormData({ ...commentFormData, content: '' })
      //   console.log(res)
    } catch (err) {
      console.warn(err)
    }
  }

  const handleDelete = async commentId => {
    try {
      //   console.log('this is before the delete')
      deleteComment(commentId)
      const userRes = await axios.get(`${serverUrl}/api-v1/users/${userId}`)
      setUserProfile(userRes.data)
    } catch (err) {
      console.warn(err)
    }
  }

  const deleteComment = async commentId => {
    try {
      await axios.delete(`${serverUrl}/api-v1/comments/${commentId}`)
    } catch (err) {
      console.warn(err)
    }
  }

  const allComments = picture.comments.map(comment => {
    return (
      <div key={comment._id}>
        <Comment
          handleDelete={handleDelete}
          comment={comment}
          currentUser={currentUser}
          commentFormData={commentFormData}
          setCommentFormData={setCommentFormData}
          serverUrl={serverUrl}
          userId={userId}
          setUserProfile={setUserProfile}
          picture={picture}
        />
      </div>
    )
  })

  return (
    <div
      id='medium-modal'
      tabIndex='-1'
      className='text-center flex mx-auto items-center justify-center overscroll-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'
    >
      <div className='relative p-4 w-full max-w-lg h-full md:h-auto'>
        <div className='relative  bg-white rounded-lg shadow dark:bg-gray-500 justify-center'>
          <div className='flex justify-between p-5 rounded-t border-b'>
            <h3 className='text-3xl font-medium text-gray-900 dark:text-white'>
              {name}
            </h3>
            {/* Modal close btn */}
            <button
              onClick={() => {
                setModalToggle(!modalToggle)
                setBlurToggle(!blurToggle)
              }}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='medium-modal'
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            {/* modal close btn end */}
          </div>

          <div className='p-2 space-y-6'>
            <img
              className='px-3 pt-3'
              src={`https://res.cloudinary.com/dshcawt4j/image/upload/v1593119998/${picture.cloudId}.png`}
              alt='placeholder'
            />
            {/* make all comments in its own scrolling containter */}

            <div className='overflow-x-auto'>{allComments}</div>
          </div>
          <div>
            <form onSubmit={handleCommentSubmit}>
              <label className='text-white font-bold' htmlFor='comment'>
                New Comment:{' '}
              </label>
              <input
                className='w-60 rounded border bg-gray-100 p-2 text-xs font-bold text-center'
                type='text'
                id='comment'
                value={commentFormData.content}
                onChange={e =>
                  setCommentFormData({
                    ...commentFormData,
                    content: e.target.value,
                  })
                }
              />

              <button className='bg-green-400 text-white font-bold rounded-lg p-2 m-3 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300'>
                Submit
              </button>
            </form>
          </div>

          <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
            <button
              onClick={() => {
                setModalToggle(!modalToggle)
                setBlurToggle(!blurToggle)
              }}
              data-modal-toggle='medium-modal'
              type='button'
              className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
