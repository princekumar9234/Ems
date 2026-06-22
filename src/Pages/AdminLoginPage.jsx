import React, { useState } from "react";

const AdminLoginPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");

  const handleFrom = (e) => {
    e.preventDefault();
    console.log("title :", title);
    console.log("description is :", description);
    console.log("date is :", date);
    console.log("assign to :", assign);
    console.log("category is :", category);
    setTitle("");
    setDescription("");
    setDate("");
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
              value={title}
              onChange={(elem) => {
                setTitle(elem.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
              className="outline-none p-1 px-3 border-2 rounded-lg placeholder:text-gray-200  "
            />
            <h3>Date:</h3>
            <input
              value={date}
              onChange={(elem) => {
                setDate(elem.target.value);
              }}
              type="date"
              className="outline-none p-1 px-3 border-2 rounded-lg placeholder:text-gray-200  "
              
            />

            <h3>Asign To:</h3>
            <input
              value={assign}
              onChange={(elem) => {
                setAssign(elem.target.value);
              }}
              placeholder="Employee name"
              type="text"
              className="outline-none py-1 px-3 border-2 rounded-lg placeholder:text-gray-200  "
              
            />

            <h3>Category:</h3>
            <input
              value={category}
              onChange={(elem) => {
                setCategory(elem.target.value);
              }}
              type="text"
              placeholder="Design,Development,etc"
             className="outline-none p-1 px-3 border-2 rounded-lg placeholder:text-gray-200  "
             
            />

            
          </div>

          <div className=" flex flex-col gap-2 mt-4">
            <h3>Description:</h3>
            <textarea
              value={description}
              onChange={(elem) => {
                setDescription(elem.target.value);
              }}
             
              rows={6}
              cols={70}
              placeholder="Detail description of task(make 50 word) "
              className="outline-none p-2 px-3 border-2 rounded-lg placeholder:text-gray-200  "

            ></textarea>
            <button className="bg-red-500 mt-7 text-2xl py-2  rounded-lg font-bold">
              Create task
            </button>
          </div>
        </form>
    
    </div>
  );
};

export default AdminLoginPage;
