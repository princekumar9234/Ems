import React from "react";
import EmployHeader from "../Others/EmployHeader";
import EmpTaskList from "../TaskList/EmpTaskList";
import EmpTask from "../Others/EmpTask";

const EmployDashBoard = (props) => {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      <EmployHeader data={props.data} changeUser={props.changeUser} />
      <main className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8">
        <EmpTaskList data={props.data} />
        <EmpTask data={props.data} onUpdateStatus={props.onUpdateStatus} />
      </main>
    </div>
  );
};

export default EmployDashBoard;
