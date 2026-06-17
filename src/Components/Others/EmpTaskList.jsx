import React from 'react'

const EmpTaskList = () => {
  return (
    <div className='flex justify-between lg:flex-nowrap lg:mt-5 lg:gap-5 flex-wrap gap-2'>
        <div className='h-30 w-[49%] mt-3  rounded-2xl px-4 py-2 lg:px-10 bg-red-400'>
           <h2 className='text-4xl font-semibold m-2'>0</h2>
           <p className='text-3xl font-bold'>New task</p>
        </div>
        <div className='h-30 w-[49%] mt-3 rounded-2xl px-4 py-2 lg:px-10 bg-blue-400'>
           <h2 className='text-4xl font-semibold m-2'>0</h2>
           <p className='text-3xl font-bold'>New task</p>
        </div>
        <div className='h-30 w-[49%] mt-3 rounded-2xl px-4 py-2 lg:px-10 bg-green-400'>
           <h2 className='text-4xl font-semibold m-2'>0</h2>
           <p className='text-3xl font-bold'>New task</p>
        </div>
        <div className='h-30 w-[49%] mt-3 rounded-2xl px-4 py-2 lg:px-10 bg-yellow-300'>
           <h2 className='text-4xl font-semibold m-2'>0</h2>
           <p className='text-3xl font-bold'>New task</p>
        </div>
        
       
    </div>
  )
}

export default EmpTaskList