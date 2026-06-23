// import React, { useState } from 'react'

const EmployHeader = (props) => {
//   const [username, setUsername] = useState('')
//   if(!data){
// setUsername('admin')
//   } else{
//     setUsername(data.firstName)
//   }

const logOutUser = () => {
 localStorage.setItem('loggedInUser', '')
 props.changeUser('')
}
  return (
    <div>
      <div className='flex item-end justify-between '>
        <h2 className='text-2xl font-medium'>Hello, <br /> <span className='font-bold text-2xl'>userName👋</span> </h2>
       <button onClick={logOutUser} className=' bg-red-500 h-fit text-lg font-bold cursor-pointer text-white px-3 mt-4'>Log Out</button>
      </div>
    </div>
  )
}

export default EmployHeader
