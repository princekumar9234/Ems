import React, { createContext, useEffect, useState } from "react";
import { getLoacalStorage, setLoacalStorage } from "../Utils/LocalStorage";

export const AuthContextCreate = createContext();

const AuthContext = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Pehle check karo ki data already hai ya nahi, agar nahi hai toh set karo
    if (!localStorage.getItem('employee') || !localStorage.getItem('admin')) {
      setLoacalStorage();
    }
    const { employee } = getLoacalStorage();
    setUserData(employee);
  }, []);

  return (
    <div>
      <AuthContextCreate.Provider value={[userData, setUserData]}>
        {children}
      </AuthContextCreate.Provider>
    </div>
  );
};

export default AuthContext;
