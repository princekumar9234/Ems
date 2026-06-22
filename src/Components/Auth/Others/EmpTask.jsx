import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompletedTask from "../TaskList/CompletedTask";
import FailTask from "../TaskList/FailTask";

const EmpTask = ({data}) => {
  
  return (
    <div
      id="EmpTask"
      className="h-[52%] lg:h-[60%]  overflow-x-auto flex items-center flex-nowrap gap-3 px-1  py-4 w-full mt-5 lg:mt-10"
    >
          
     {data.tasks.map((idx,elem)=>{
     
        if(elem.active){
        return <AcceptTask key={idx}/>
      }
      if(elem.newTsk){
        return <NewTask  key={idx}/>
      }
      if(elem.failed){
        return <FailTask  key={idx}/>
      }
      if(elem.completed){
        return <CompletedTask  key={idx}/>
      }
     
     })}
     
    </div>
  );
};

export default EmpTask;
