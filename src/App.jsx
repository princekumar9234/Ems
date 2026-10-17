import React, { useContext, useEffect, useState } from "react";
import Login from "./Pages/Login";
import AdminDashBoard from "./Components/Auth/DashBoard/AdminDashBoard";
import EmployDashBoard from "./Components/Auth/DashBoard/EmployDashBoard";
import { AuthContextCreate } from "./Context/AuthContext";

const App = () => {
  const [userData, setUserData] = useContext(AuthContextCreate);
  const [user, setUser] = useState(null);
  const [loggedInuserData, setLoggedInuserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser && loggedInUser !== "") {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        if (parsedUser && parsedUser.role) {
          setUser(parsedUser.role);
          setLoggedInuserData(parsedUser.data || null);
        }
      } catch (err) {
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);

  // Keep loggedInuserData synced if userData changes
  useEffect(() => {
    if (user === "employee" && loggedInuserData && userData) {
      const currentEmployee = userData.find((e) => e.id === loggedInuserData.id);
      if (currentEmployee) {
        setLoggedInuserData(currentEmployee);
      }
    }
  }, [userData, user]);

  const handleLogin = (email, password) => {
    if (email === "princechouhan9939@gmail.com" && password === "PRINCE@18") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email.trim().toLowerCase() === e.email.trim().toLowerCase() && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInuserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Invalid credentials. Please verify your email and password.");
      }
    } else {
      alert("Invalid credentials.");
    }
  };

  const handleUpdateTaskStatus = (taskIndex, actionType) => {
    if (!loggedInuserData || !userData) return;

    const updatedTasks = loggedInuserData.tasks.map((task, idx) => {
      if (idx === taskIndex) {
        if (actionType === "accept") {
          return { ...task, newTask: false, active: true, failed: false, completed: false };
        } else if (actionType === "complete") {
          return { ...task, newTask: false, active: false, completed: true, failed: false };
        } else if (actionType === "fail") {
          return { ...task, newTask: false, active: false, completed: false, failed: true };
        }
      }
      return task;
    });

    // Recalculate employee task counts
    const newCounts = {
      newTask: updatedTasks.filter((t) => t.newTask).length,
      active: updatedTasks.filter((t) => t.active).length,
      completed: updatedTasks.filter((t) => t.completed).length,
      failed: updatedTasks.filter((t) => t.failed).length,
    };

    const updatedEmployee = {
      ...loggedInuserData,
      tasks: updatedTasks,
      taskCounts: newCounts,
    };

    const updatedUserData = userData.map((emp) =>
      emp.id === loggedInuserData.id ? updatedEmployee : emp
    );

    setLoggedInuserData(updatedEmployee);
    setUserData(updatedUserData);
    localStorage.setItem("employee", JSON.stringify(updatedUserData));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "employee", data: updatedEmployee })
    );
  };

  return (
    <div className="app-canvas min-h-screen text-neutral-900">
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashBoard changeUser={setUser} />}
      {user === "employee" && (
        <EmployDashBoard
          changeUser={setUser}
          data={loggedInuserData}
          onUpdateStatus={handleUpdateTaskStatus}
        />
      )}
    </div>
  );
};

export default App;
