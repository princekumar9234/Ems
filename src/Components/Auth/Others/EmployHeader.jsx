import React from 'react'

const EmployHeader = ({data}) => {
  console.log(data)
  return (
    <div>
      <div className='flex item-end justify-between '>
        <h2 className='text-2xl font-medium'>Hello, <br /> <span className='font-bold text-2xl'>{data.firstName}👋</span> </h2>
       <button className=' bg-red-500 h-fit text-lg font-bold cursor-pointer text-white px-3 mt-4'>Log Out</button>
      </div>
    </div>
  )
}

export default EmployHeader
