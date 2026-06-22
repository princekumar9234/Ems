// import React, { useState } from 'react'

const EmployHeader = () => {
//   const [username, setUsername] = useState('')
//   if(!data){
// setUsername('admin')
//   } else{
//     setUsername(data.firstName)
//   }
  return (
    <div>
      <div className='flex item-end justify-between '>
        <h2 className='text-2xl font-medium'>Hello, <br /> <span className='font-bold text-2xl'>userName👋</span> </h2>
       <button className=' bg-red-500 h-fit text-lg font-bold cursor-pointer text-white px-3 mt-4'>Log Out</button>
      </div>
    </div>
  )
}

export default EmployHeader
