import axios from 'axios'
import { useState } from 'react'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

export default function Comment({
  picture,
  handleDeletePicture,
  handleDelete,
  comment: {
    user: { name, _id },
    content,
  },
  comment,
  currentUser,
  commentFormData,
  setCommentFormData,
  serverUrl,
  userId,
  setUserProfile,
}) {
  const [edit, setEdit] = useState(false)
  const [editText, setEditText] = useState(comment)

  const handleEditChange = async () => {
    try {
      editComment()
      const userRes = await axios.get(`${serverUrl}/api-v1/users/${userId}`)
      setUserProfile(userRes.data)
      setEdit(!edit)
      setCommentFormData({ ...commentFormData, content: '' })
    } catch (err) {
      console.warn(err)
    }
  }

  const editComment = async () => {
    console.log(editText)
    try {
      await axios.put(`${serverUrl}/api-v1/comments/${comment._id}`, editText)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div>
      <h2 className='font-bold text-purple-300'>Comment by: {name}</h2>
      {edit ? (
        <div>
          <input
            className='w-60 rounded border bg-gray-100 p-2 text-xs font-bold text-center'
            type='text'
            value={editText.content}
            onChange={e =>
              setEditText({ ...editText, content: e.target.value })
            }
          />
          <button
            className='p-2 mx-2 rounded-lg text-white font-bold bg-green-400 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300'
            onClick={handleEditChange}
          >
            Submit
          </button>
        </div>
      ) : (
        <div>
          <div className='flex flex-cols justify-center'>
            <p className='font-bold text-white mt-2 mb-2'>{content}</p>
          </div>
          {currentUser.id === _id ? (
            <div className='grid grid-cols-2'>
              <button
                className='shadow-lg flex gap-x-2 row-reverse bg-red-500 text-white font-bold rounded-lg p-2 ml-10 mr-4 transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300'
                onClick={() => handleDelete(comment._id)}
              >
                Delete Comment <TrashIcon className='h-5 w-5 text-white' />
              </button>
              <button
                className='shadow-lg flex gap-x-2 row-reverse bg-purple-400 rounded-lg font-bold text-white pl-5 py-2 ml-10 mr-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-400 duration-300'
                onClick={() => setEdit(!edit)}
              >
                Edit <PencilAltIcon className='h-5 w-5 text-white' />
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
