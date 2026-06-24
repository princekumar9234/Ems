import React from 'react'

const EmployHeader = (props) => {
  // Admin ke liye data nahi hoga, employee ke liye firstName hoga
  const username = props.data ? props.data.firstName : 'Admin'

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser')
    props.changeUser(null)
  }

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-medium'>Hello, <br /> <span className='font-bold text-2xl'>{username} 👋</span></h2>
        <button onClick={logOutUser} className='bg-red-500 h-fit text-lg font-bold cursor-pointer text-white px-5 py-2 mt-4 rounded-lg'>Log Out</button>
      </div>
    </div>
  )
}

export default EmployHeader

