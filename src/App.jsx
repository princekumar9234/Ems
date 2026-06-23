import React, { useContext, useEffect, useState } from "react";

import { getLoacalStorage, setLoacalStorage } from "./Utils/LocalStorage";
import Login from "./Pages/Login";
import AdminDashBoard from "./Components/Auth/DashBoard/AdminDashBoard";
import EmployDashBoard from "./Components/Auth/DashBoard/EmployDashBoard";
import { AuthContextCreate } from "./Context/AuthContext";

const App = () => {
  const AuthData = useContext(AuthContextCreate);

  const [user, setUser] = useState(null);
const [loggedInuserData, setLoggedInuserData] = useState(null)


  useEffect(() => {
   const loggedInUser =localStorage.getItem("loggedInUser")
 
   if(loggedInUser) {
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInuserData(userData.data)
   }
},[ ])
  

  const handleLogin = (email, password) => {
    if (email == "princechouhan9939@gmail.com" && password == "PRINCE@18") {
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    } else if (AuthData) {
      const employee =AuthData.employee.find((e)=>email == e.email && password ==e.password)
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
