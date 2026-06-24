import React, { useState } from "react";
import AdminLoginPage from "../../../Pages/AdminLoginPage";
import AllTaskAdmin from '../../../Pages/AllTaskAdmin'
import EmployHeader from "../Others/EmployHeader";

const AdminPanel = (props) => {
 

  return (
    <div className="px-2 py-2 bg-transparent lg:px-4">
      <EmployHeader changeUser={props.changeUser}/>
      <AdminLoginPage/>
    <AllTaskAdmin/>
    </div>
  );
};

export default AdminPanel;
