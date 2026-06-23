import React from 'react'

const NewTask = ({data}) => {
  console.log(data)
  return (
    <div className=" shrink-0 border text-purple-500 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl border-2 text-red-800">{data.category}</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.taskDescription}</p>
      <div className=' mt-4 gap-4 m-1'>
        <button className='border-2 text-green-500 md:py-1 md:px-3 text-sm'>Accept Tasks</button>
      </div>
      </div>
  )
}

export default NewTask