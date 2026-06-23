import React from 'react'

const EmpTaskList = ({data}) => {
  return (
    <div className='flex justify-between text-nowrap lg:flex-nowrap mt-5 lg:gap-3 flex-wrap gap-2'>
        <div className='h-30 w-[47%] mt-3  rounded-2xl px-3 py-4 lg:px-3 border text-red-500'>
           <h2 className='text-4xl font-semibold m-2'>{data.taskCounts.newTask}</h2>
           <p className='text-2xl lg:text-3xl font-bold'>New Tasks</p>
        </div>
        <div className='h-30 w-[50%] mt-3 rounded-2xl px-3 py-4 lg:px-3 border text-blue-500'>
           <h2 className='text-4xl font-semibold m-2'>{data.taskCounts.active}</h2>
           <p className='text-2xl lg:text-3xl font-bold'>Accepted Tasks</p>
        </div>
        <div className='h-30 w-[47%] mt-3 rounded-2xl px-3 py-4 lg:px-3 border text-green-500'>
           <h2 className='text-4xl font-semibold m-2'>{data.taskCounts.failed}</h2>
           <p className='text-2xl lg:text-3xl text-nowrap font-bold'>Failed Tasks</p>
        </div>
        <div className='h-30 w-[50%] lg:w-[47%] mt-3 rounded-2xl  border py-4 px-2 lg:px-2 text-yellow-400'>
           <h2 className='text-4xl font-semibold m-2'>{data.taskCounts.completed}</h2>
           <p className='text-2xl lg:text-3xl text-nowrap font-bold'>Completed Tasks</p>
        </div>
        
       
    </div>
  )
}

export default EmpTaskList