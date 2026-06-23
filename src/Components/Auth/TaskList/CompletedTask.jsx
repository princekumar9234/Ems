import React from 'react'

const CompletedTask = ({data}) => {

  return (
    <div className=" shrink-0  border text-blue-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 mt-4 lg:m-4 lg:ml-2">
        <h2 className="text-sm  px-1 md:px-2 py-1 lg:px-4 rounded lg:text-xl border-2 text-red-800">{data.category}</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.taskTitle}</h3>
      <p className=" md:px-2  lg:mt-5  lg:px-3 text-nowrap text-sm">{data.taskDescription}</p>
      <div className=' mt-10 md:mt-10 gap-4 m-1 ml-4'>
        <button className='border text-green-600  text-sm py-1 w-[95%] '>Complete</button>
        
      </div>
      </div>
  )
}

export default CompletedTask