import React from "react";

const EmpTask = ({data}) => {
  return (
    <div
      id="EmpTask"
      className="h-[52%] lg:h-[30%]  overflow-x-auto flex items-center flex-nowrap gap-3 px-1  py-4 w-full mt-5 lg:mt-10"
    >

      <div className="  shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>


      <div className=" shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>


      <div className=" shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>


      <div className=" shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>


      <div className=" shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>


      <div className=" shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>


      <div className=" shrink-0  bg-red-400 h-full w-1/2 lg:w-75 rounded-xl">
      <div className="flex justify-between items-center m-2 lg:m-4">
        <h2 className="text-sm  px-2 py-1 lg:px-4 rounded lg:text-2xl bg-red-800">High</h2>
        <h4 className="text-sm font-bold lg:text-lg">{data.tasks.taskDate}</h4>
      </div>
      <h3 className="mt-3 lg:mt-6 font-semibold text-lg lg:text-2xl lg:font-bold px-2">{data.tasks.taskTitle}</h3>
      <p className="mb-3  lg:mt-5 px-1 lg:px-3 overflow-hidden text-xl-sm">{data.tasks.taskDescription}</p>
      </div>

     
     
    </div>
  );
};

export default EmpTask;
