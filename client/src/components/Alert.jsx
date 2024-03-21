import React from 'react'

const Alert = ({msg}) => {
  return (
    <div className='bg-red-500 text-white p-2 rounded-md mt-6 text-sm '>
        <i className='fa-solid fa-triangle-exclamation mr-2' />
        {msg}
    </div>
  )
}

export default Alert