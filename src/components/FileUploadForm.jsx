import React, { useState } from 'react'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function FileUploadForm({
  modalToggle,
  setModalToggle,
  userId,
  userProfile,
  setUserProfile,
}) {
  const [formImg, setFormImg] = useState(null)
  const [caption, setCaption] = useState('')
  const [msg, setMsg] = useState('')
  const [image, setImage] = useState('')

  // submits the picture and updates the state
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      finalPicSubmit()
      const res = await axios.get(`${serverUrl}/api-v1/users/${userId}`)
      setUserProfile(res.data)
      setModalToggle(!modalToggle)
    } catch (err) {
      console.warn()
    }
  }

  // the final submit, which will update the caption of the picture
  const finalPicSubmit = async () => {
    const newestPicture = userProfile.pictures[userProfile.pictures.length - 1]
    try {
      await axios.put(`${serverUrl}/api-v1/pictures/${newestPicture._id}`, {
        caption,
      })
    } catch (err) {
      console.warn(err)
    }
  }

  // sets the image as soon as it is uploaded
  const picInputChange = async e => {
    console.log('changed')
    setFormImg(e.target.files[0])
  }

  // this form submit uploads the picture to the cloud
  const formSubmit = async () => {
    try {
      // multipart form data object
      const formData = new FormData()
      formData.append('image', formImg)
      // formData.append('caption', caption)
      const res = await axios.post(
        `${serverUrl}/api-v1/users/${userId}/pictures`,
        formData
      )
      const userRes = await axios.get(`${serverUrl}/api-v1/users/${userId}`)
      setUserProfile(userRes.data)
      setImage(res.data.cloudImage)
      setFormImg(null)
      // console.log(formData.values())
    } catch (err) {
      console.warn(err)
      setMsg('Check Server Error')
    }
  }

  // immediate upload to cloud as soon as the user chooses a picture to upload
  if (formImg) {
    formSubmit()
  }

  const imageContainer = (
    <div>
      <img className="mb-2 rounded-md" src={image} alt={image} />
      <input
        className="rounded-md px-2 py-1"
        type="text"
        name="caption"
        onChange={e => setCaption(e.target.value)}
        value={caption}
        placeholder="Caption it..."
      />
    </div>
  )

  return (
    <React.Fragment>
      <div
        id="small-modal"
        tabIndex="-1"
        className="text-center flex mx-auto items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="flex justify-between items-center p-5  dark:border-gray-600 ">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Upload a Pic!
              </h3>
              {/* modal close button */}

              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="small-modal"
                onClick={() => setModalToggle(!modalToggle)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* end of modal close btn */}
            </div>

            <div className="mb-2 mx-2">{image && imageContainer}</div>

            {/* picture upload form */}
            <div className="flex items-center justify-center border-none">
              <form>
                <input
                  id="image"
                  type="file"
                  name="image"
                  className="hidden"
                  onChange={picInputChange}
                  encType="multipart/form-data"
                  accept=".png, .jpg, .jpeg"
                />
                <label
                  htmlFor="image"
                  className="text-white flex hover:text-violet-200 hover:bg-blue-500 cursor-pointer bg-blue-700 p-2 rounded-md"
                >
                  <p className="font-bold">Upload</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </label>
              </form>
            </div>
            {/* end of picture upload form */}

            <div className="flex flex-row-reverse items-center p-6 space-x-2 rounded-b dark:border-gray-600">
              <button
                data-modal-toggle="small-modal"
                onClick={() => setModalToggle(!modalToggle)}
                type="button"
                className="text-white bg-white hover:bg-red-100 focus:ring-4 bg-blue-700 focus:outline-none focus:ring-gray-200 rounded-lg text-sm font-bold px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-gray-600 ml-2"
              >
                Cancel
              </button>

              <button
                data-modal-toggle="small-modal"
                type="submit"
                onClick={handleSubmit}
                className="text-white bg-blue-700 hover:bg-indigo-500 hover:text-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-500 dark:hover:text-violet-200 dark:focus:ring-blue-800"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
