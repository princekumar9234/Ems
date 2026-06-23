import React from "react";
import EmployHeader from "../Others/EmployHeader";
import EmpTaskList from "../TaskList/EmpTaskList";
import EmpTask from "../Others/EmpTask";

const EmployPanel = (props) => {

  return (
  
      <div className="p-5  h-screen">
      <EmployHeader data={props.data} changeUser={props.changeUser}/>
      <EmpTaskList data={props.data} />
      <EmpTask data={props.data} />
    </div>
  );
};

export default EmployPanel;
