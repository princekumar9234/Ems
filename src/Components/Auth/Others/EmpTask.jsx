import React from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompletedTask from "../TaskList/CompletedTask";
import FailTask from "../TaskList/FailTask";

const EmpTask = ({ data }) => {
  return (
    <div
      id="EmpTask"
      className="h-[40%] lg:h-[60%]  overflow-x-auto flex items-center flex-nowrap gap-3 px-1  py-4 w-full mt-5 lg:mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTsk) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompletedTask key={idx} data={elem} />;
        }

        if (elem.failed) {
          return <FailTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default EmpTask;
