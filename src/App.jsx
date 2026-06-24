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

    if (loggedInUser && loggedInUser !== '') {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        if (parsedUser && parsedUser.role) {
          setUser(parsedUser.role);
          setLoggedInuserData(parsedUser.data || null);
        }
      } catch (err) {
        // Invalid JSON - ignore karo
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);
  

  const handleLogin = (email, password) => {
    if (email == "princechouhan9939@gmail.com" && password == "PRINCE@18") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (userData) {
      const employee =userData.find((e)=>email == e.email && password ==e.password)
      if(employee){
setUser("employee");
setLoggedInuserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      } 
        else {
          alert('invalid Credentials')
        }

    } else {
      alert("invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" && <AdminDashBoard changeUser={setUser}/> }
      {user === "employee" && <EmployDashBoard changeUser={setUser} data={loggedInuserData}/>}
    </>
  );
};

export default App;
