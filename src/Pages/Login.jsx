import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col justify-center items-center px-4 py-8 sm:py-12">
      {/* Header Eyebrow & Title */}
      <div className="w-full max-w-md mb-6 sm:mb-8 text-center">
        <div className="eyebrow-tag mb-2 sm:mb-3">Authentication</div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
          Sign in to your account
        </h1>
        <p className="mt-2 text-neutral-600 text-xs sm:text-sm leading-relaxed">
          Enter your credentials to access your organization workspace.
        </p>
      </div>

      {/* Main Card */}
      <div className="theme-card max-w-md w-full p-6 sm:p-8 bg-white shadow-sm">
        {/* Card Header with Icon */}
        <div className="flex items-center gap-3.5 pb-5 border-b border-neutral-100 mb-6">
          <div className="icon-badge">
            <Lock size={18} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-neutral-900">Secure Access</h2>
            <p className="text-xs text-neutral-500">Enter your credentials below</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleForm} className="space-y-5">
          {/* Email Input Field */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="flex items-center w-full bg-[#FCFAF8] border border-[#E4DFD7] rounded-xl px-4 py-3.5 focus-within:border-[#BC1B39] focus-within:ring-2 focus-within:ring-[#BC1B39]/15 focus-within:bg-white transition-all">
              <Mail size={18} className="text-neutral-400 shrink-0 mr-3" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="name@company.com"
                className="w-full bg-transparent outline-none text-sm text-neutral-800 placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Password Input Field */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="flex items-center w-full bg-[#FCFAF8] border border-[#E4DFD7] rounded-xl px-4 py-3.5 focus-within:border-[#BC1B39] focus-within:ring-2 focus-within:ring-[#BC1B39]/15 focus-within:bg-white transition-all">
              <Lock size={18} className="text-neutral-400 shrink-0 mr-3" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-sm text-neutral-800 placeholder:text-neutral-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-neutral-400 hover:text-neutral-700 cursor-pointer p-1 ml-2 shrink-0 focus:outline-none"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 btn-crimson rounded-full text-sm sm:text-base font-semibold shadow-sm cursor-pointer"
            >
              <span>Sign in to workspace</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>

        {/* Credentials hint for easy manual entry */}
        <div className="mt-6 pt-5 border-t border-neutral-100 text-center">
          <p className="text-[11px] text-neutral-400 leading-relaxed">
            Admin: <span className="font-medium text-neutral-600">princechouhan9939@gmail.com</span> (PRINCE@18)<br />
            Employee: <span className="font-medium text-neutral-600">emp@gmail.com</span> (123)
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-center text-xs text-neutral-400">
        Employee Management System &bull; Designed with clean minimalist aesthetics
      </div>
    </div>
  );
};

export default Login;
