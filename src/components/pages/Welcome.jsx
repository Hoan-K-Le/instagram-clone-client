import React from 'react'
import FileUploadForm from '../FileUploadForm'

export default function Welcome() {
  return (
    <div className='flex items-center justify-center '>
      <h2>Welcome</h2>
      <div className='block space-y-4 md:flex md:space-y-0 md:space-x-4'>
        <button
          className='block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
          data-modal-toggle='small-modal'
        >
          Small modal
        </button>
      </div>
      <FileUploadForm />
    </div>
  )
}
