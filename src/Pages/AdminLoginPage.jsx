import React, { useState } from "react";
import { AuthContextCreate } from "../Context/AuthContext";
import { useContext } from "react";


const AdminLoginPage = () => {
 
  const [userData,setUserData] = useContext(AuthContextCreate);
  
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");

    
  const handleFrom = (e) => {
    e.preventDefault();

    // Task object seedha banao - setTask async hai toh state se push karna kaam nahi karta
    const newTaskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData.map((elem) => {
      if (assign === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTaskObj],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        };
      }
      return elem;
    });

    setUserData(data);
    // localStorage mein bhi update karo taaki refresh ke baad data rahe
    localStorage.setItem("employee", JSON.stringify(data));

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssign("");
  };

  return (
    <div className="mt-3 bg-[#1C1C1C]">
      <form
        className="lg:flex w-full justify-between gap-5 p-4 "
        onSubmit={(e) => {
          handleFrom(e);
        }}
      >
        <div className="lg:w-1/2 flex flex-col   gap-2">
          <h3>Task Title:</h3>
          <input
            value={taskTitle}
            onChange={(elem) => {
              setTaskTitle(elem.target.value);
            }}
            type="text"
            placeholder="Make a UI design"
            className="outline-none p-1 px-3 border-2 rounded  placeholder:text-gray-200 placeholder:text-sm "
          />
          <h3>Date:</h3>
          <input
            value={taskDate}
            onChange={(elem) => {
              setTaskDate(elem.target.value);
            }}
            type="date"
            className="outline-none py-1 px-3 border-2 rounded placeholder:text-gray-200 placeholder:text-sm "
          />

          <h3>Asign To:</h3>
          <input
            value={assign}
            onChange={(elem) => {
              setAssign(elem.target.value);
            }}
            placeholder="Employee name"
            type="text"
            className="outline-none py-1 px-3 border-2 rounded placeholder:text-gray-200 placeholder:text-sm "
          />

          <h3>Category:</h3>
          <input
            value={category}
            onChange={(elem) => {
              setCategory(elem.target.value);
            }}
            type="text"
            placeholder="Design,Development,etc"
            className="outline-none p-1 px-3 border-2 rounded placeholder:text-gray-200  placeholder:text-sm"
          />
        </div>

        <div className=" flex flex-col gap-2 mt-4">
          <h3>Description:</h3>
          <textarea
            value={taskDescription}
            onChange={(elem) => {
              setTaskDescription(elem.target.value);
            }}
            rows={6}
            cols={70}
            placeholder="Detail description of task(make 50 word) "
            className="outline-none p-2 px-3 border-2 rounded placeholder:text-gray-200  placeholder:text-sm"
          ></textarea>
          <button className=" border-2 text-red-500 mt-7 text-2xl py-1  rounded-lg font-bold">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
