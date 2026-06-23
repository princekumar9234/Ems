import React, { useState } from "react";
import { Eye,EyeOff } from "lucide-react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center h-screen items-center  ">
      <div className="border-2  border-red-800  rounded-2xl bg-transparent">
        <h2 className="mt-15 mb-10 text-center text-2xl opacity-80 text-red-500 ">
          Login Now
        </h2>
        <form
          onSubmit={(e) => {
            handleForm(e);
          }}
          className="flex flex-col justify-center gap-7 lg:gap-9 m-5 lg:m-8 lg:mb-10 lg:mt-13 lg:10  items-center"
        >
          <input
            onChange={(r) => {
              setEmail(r.target.value);
            }}
            value={email}
            type="text"
            placeholder="Email"
            className="w-65 lg:w-80 px-4 border-2 border-emerald-900 outline-none  placeholder:text-gray-300  bg-transparent py-3 lg:py-4  rounded-2xl"
          />
          <div className="relative flex items-center w-65 lg:w-80">
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type={showPassword ? "text" : "password"} // dynamic type toggling
              placeholder="Password"
              className="w-full px-4 pr-12 border-2 py-3 lg:py-4 border-emerald-900 bg-transparent placeholder:text-gray-300 outline-none rounded-2xl"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}  // click handler to toggle state
              className="absolute right-4 text-emerald-600 hover:text-emerald-400 focus:outline-none cursor-pointer flex items-center justify-center"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button className="px-14 mb-7 bg-emerald-900  text-gray-300 rounded-2xl py-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
