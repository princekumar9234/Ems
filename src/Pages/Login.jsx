import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, UserCheck } from "lucide-react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  const fillCredentials = (userEmail, userPass) => {
    setEmail(userEmail);
    setPassword(userPass);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] flex flex-col justify-center items-center px-4 py-8 sm:py-12">
      {/* Header Eyebrow & Title */}
      <div className="w-full max-w-lg mb-6 sm:mb-8 text-center">
        <div className="eyebrow-tag mb-2 sm:mb-3">Authentication</div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
          Sign in to your account
        </h1>
        <p className="mt-2 text-neutral-600 text-xs sm:text-sm md:text-base leading-relaxed">
          Manage employee tasks, review real-time progress, and streamline team workflows.
        </p>
      </div>

      {/* Main Card */}
      <div className="theme-card max-w-lg w-full p-5 sm:p-8 md:p-10 bg-white">
        {/* Card Header with Icon */}
        <div className="flex items-center gap-3.5 pb-5 sm:pb-6 border-b border-neutral-100">
          <div className="icon-badge">
            <Lock size={18} />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-neutral-900">Secure Access</h2>
            <p className="text-xs text-neutral-500">Enter your corporate credentials</p>
          </div>
        </div>

        {/* Quick Demo Fill Buttons */}
        <div className="my-5 sm:my-6 p-3 sm:p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#EFEBE4]">
          <p className="text-[11px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Quick Demo Autofill:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => fillCredentials("princechouhan9939@gmail.com", "PRINCE@18")}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium rounded-xl bg-white border border-[#E5E0D8] text-neutral-700 hover:border-[#BC1B39] hover:text-[#BC1B39] transition-all cursor-pointer shadow-2xs"
            >
              <ShieldCheck size={14} className="text-[#BC1B39]" />
              <span>Admin Demo</span>
            </button>
            <button
              type="button"
              onClick={() => fillCredentials("emp@gmail.com", "123")}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium rounded-xl bg-white border border-[#E5E0D8] text-neutral-700 hover:border-[#BC1B39] hover:text-[#BC1B39] transition-all cursor-pointer shadow-2xs"
            >
              <UserCheck size={14} className="text-[#BC1B39]" />
              <span>Employee Demo</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleForm} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                placeholder="name@company.com"
                className="input-box pl-11"
              />
              <Mail
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                className="input-box pl-11 pr-12"
              />
              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 focus:outline-none cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-6 btn-crimson rounded-full text-base font-semibold shadow-sm cursor-pointer"
            >
              <span>Sign in to workspace</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Footer Info */}
      <div className="mt-8 text-center text-xs text-neutral-500">
        Employee Management System &bull; Designed with clean minimalist aesthetics
      </div>
    </div>
  );
};

export default Login;
