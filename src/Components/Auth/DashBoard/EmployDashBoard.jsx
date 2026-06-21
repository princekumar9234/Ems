import React from "react";
import EmployHeader from "../Others/EmployHeader";
import EmpTaskList from "../Others/EmpTaskList";
import EmpTask from "../Others/EmpTask";

const EmployPanel = ({ data}) => {

  return (
  
      <div className="p-5  h-screen">
      <EmployHeader data={data} />
      <EmpTaskList data={data} />
      <EmpTask data={data} />
    </div>
  );
};

export default EmployPanel;
