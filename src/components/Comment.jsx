import axios from 'axios'
import { useState } from 'react'

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
      <h2>{name}</h2>

      {edit ? (
        <div>
          <input
            type="text"
            value={editText.content}
            onChange={e =>
              setEditText({ ...editText, content: e.target.value })
            }
          />
          <button onClick={handleEditChange}>Submit</button>
        </div>
      ) : (
        <div>
          <p>{content}</p>
          {currentUser.id === _id ? (
            <div>
              <button onClick={() => handleDelete(comment._id)}>
                Delete Comment
              </button>
              <button onClick={() => setEdit(!edit)}>Edit</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
