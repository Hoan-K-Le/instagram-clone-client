import React, { useState } from 'react'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function FileUploadForm() {
  const [formImg, setFormImg] = useState('')
  //   const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // multipart form data object
      const formData = new FormData()
      formData.append('image', formImg)
      //   formData.append('title', title)
      const res = await axios.post(`${serverUrl}/api-v1/users`, formData)
      setImage(res.data.cloudImage)
      console.log(res.data)
    } catch (err) {
      console.warn(err)
      setMsg('Check Server Error')
    }
  }

  return (
    <React.Fragment>
      {image && <img src={image} alt={image} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor='image'>Upload an Image:</label>
        <input
          type='file'
          id='image'
          onChange={e => setFormImg(e.target.files[0])}
          encType='multipart/form-data'
        />

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
