import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-gray-200 rounded-lg px-4 py-1 mx-2 font-semibold  cursor-pointer'>
      {name}
    </div>
  )
}

export default Button

// bg-gray-200 rounded-lg px-4 py-2 mx-2 text-center