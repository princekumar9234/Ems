import React from "react";
import AdminLoginPage from "../../../Pages/AdminLoginPage";
import AllTaskAdmin from "../../../Pages/AllTaskAdmin";
import EmployHeader from "../Others/EmployHeader";

const AdminDashBoard = (props) => {
  return (
    <div className="min-h-screen bg-[#FBF9F5]">
      <EmployHeader changeUser={props.changeUser} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdminLoginPage />
        <AllTaskAdmin />
      </main>
    </div>
  );
};

export default AdminDashBoard;
