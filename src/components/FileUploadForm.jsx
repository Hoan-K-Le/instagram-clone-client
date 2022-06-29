import React, { useState } from 'react'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function FileUploadForm({
  modalToggle,
  setModalToggle,
  userId,
}) {
  const [formImg, setFormImg] = useState(null)
  const [title, setTitle] = useState('')
  const [msg, setMsg] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    formSubmit()
    setModalToggle(!modalToggle)
  }

  const picInputChange = async e => {
    console.log('changed')
    setFormImg(e.target.files[0])

    // setImage(someImg)
    // inputRef.current.submit()
  }

  const formSubmit = async () => {
    try {
      // multipart form data object
      const formData = new FormData()
      formData.append('image', formImg)
      formData.append('title', title)
      const res = await axios.post(
        `${serverUrl}/api-v1/users/${userId}/pictures`,
        formData
      )
      setImage(res.data.cloudImage)
      setFormImg(null)
      // console.log(res.data)
    } catch (err) {
      console.warn(err)
      setMsg('Check Server Error')
    }
  }

  if (formImg) {
    formSubmit()
  }

  const imageContainer = (
    <div>
      <img className='mb-2 rounded-md' src={image} alt={image} />
      <input
        className='rounded-md px-2 py-1'
        type='text'
        onChange={e => setTitle(e.target.value)}
        value={title}
        placeholder='Caption it...'
      />
    </div>
  )

  return (
    <React.Fragment>
      <div
        id='small-modal'
        tabIndex='-1'
        className='text-center flex mx-auto items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full'
      >
        <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='flex justify-between items-center p-5  dark:border-gray-600 '>
              <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                Upload a Pic!
              </h3>
              {/* modal close button */}
              <button
                type='button'
                className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-toggle='small-modal'
                onClick={() => setModalToggle(!modalToggle)}
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
              {/* end of modal close btn */}
            </div>

            <div className='mb-2 mx-2'>{image && imageContainer}</div>

            <div className='flex items-center justify-center border-none'>
              <form>
                <input
                  id='image'
                  type='file'
                  className='hidden'
                  onChange={picInputChange}
                  encType='multipart/form-data'
                  accept='.png, .jpg, .jpeg'
                />
                <label
                  htmlFor='image'
                  className='text-white flex hover:text-violet-200 hover:bg-blue-500 cursor-pointer bg-blue-700 p-2 rounded-md'
                >
                  <p className='font-bold'>Upload</p>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6 ml-1'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                    />
                  </svg>
                </label>
              </form>
            </div>

            <div className='flex flex-row-reverse items-center p-6 space-x-2 rounded-b dark:border-gray-600'>
              <button
                data-modal-toggle='small-modal'
                onClick={() => setModalToggle(!modalToggle)}
                type='button'
                className='text-white bg-white hover:bg-red-100 focus:ring-4 bg-blue-700 focus:outline-none focus:ring-gray-200 rounded-lg text-sm font-bold px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-gray-600 ml-2'
              >
                Cancel
              </button>
              <button
                data-modal-toggle='small-modal'
                type='submit'
                onClick={handleSubmit}
                className='text-white bg-blue-700 hover:bg-indigo-500 hover:text-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-500 dark:hover:text-violet-200 dark:focus:ring-blue-800'
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
