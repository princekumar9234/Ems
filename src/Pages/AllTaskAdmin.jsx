import React, { useContext } from 'react'
import { AuthContextCreate } from '../Context/AuthContext'

const AllTaskAdmin = (elem) => {
 const [userData,setUserData] = useContext(AuthContextCreate)

  return (
    <div className='  mt-5   rounded'>
      <div className='flex justify-between rounded text-center gap-3  font-bold py-4  mb-2'>
        <h2 className='w-1/5 border text-red-500'>Employee Name</h2>
        <h3 className='w-1/5 border text-red-500'>new Task </h3>
        <h4 className='w-1/5 border text-red-500'>Active Tasks</h4>
        <h4 className='w-1/5 border text-red-500'>Completed</h4>
        <h4 className='w-1/5 border text-red-500'>Failed</h4>
      </div>
    <div className='overflow-auto  '>
      {userData.map(function(elem,idx){
      return <div className=' flex  rounded  font-bold mb-2 text-center gap-2' key={idx}>
        <h2 className='w-1/5 border rounded text-emerald-500'>{elem.firstName}</h2>
        <h3 className='w-1/5 border rounded text-blue-500'>{elem.taskCounts.newTask
          
        }</h3>
        <h4 className='w-1/5 border rounded text-purple-500'>{elem.taskCounts.active}</h4>
        <h4 className='w-1/5 border rounded text-green-500'>{elem.taskCounts.completed}</h4>
        <h4 className='w-1/5 border rounded text-red-500'>{elem.taskCounts.failed}</h4>
      </div>
    })}
    </div>
      
    </div>
  )
}

export default AllTaskAdmin