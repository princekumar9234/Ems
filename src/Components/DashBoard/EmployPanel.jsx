import React from 'react'
import EmployHeader from '../Others/EmployHeader'
import EmpTaskList from '../Others/EmpTaskList'
import EmpTask from '../Others/EmpTask'

const EmployPanel = () => {
  return (
    <div className='p-5 bg-[#1C1C1C] h-screen'>
      <EmployHeader/>
      <EmpTaskList/>
      <EmpTask/>
    </div>
  )
}

export default EmployPanel
