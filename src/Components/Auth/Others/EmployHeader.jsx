import React from "react";
import { LogOut, Calendar, Shield, User } from "lucide-react";

const EmployHeader = (props) => {
  const isAdmin = !props.data;
  const username = props.data ? props.data.firstName : "Admin";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    props.changeUser(null);
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#EFEBE4] sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3">
        {/* Left: Branding & Greeting */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FEECEF] text-[#BC1B39] flex items-center justify-center font-bold text-sm sm:text-base shadow-2xs shrink-0">
            {isAdmin ? <Shield size={18} className="sm:w-5 sm:h-5" /> : <User size={18} className="sm:w-5 sm:h-5" />}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#BC1B39] truncate">
                {isAdmin ? "Admin Portal" : "Employee Portal"}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
            </div>
            <h1 className="text-sm sm:text-xl md:text-2xl font-extrabold text-neutral-900 tracking-tight truncate">
              Hello, {username} <span className="inline-block">👋</span>
            </h1>
          </div>
        </div>

        {/* Right: Date & Logout Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EFEBE4] text-xs font-medium text-neutral-600">
            <Calendar size={14} className="text-neutral-500" />
            <span>{today}</span>
          </div>

          <button
            onClick={logOutUser}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#E4DFD7] text-neutral-700 hover:text-[#BC1B39] hover:border-[#BC1B39] hover:bg-[#FFF5F6] text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs"
            title="Sign Out"
          >
            <LogOut size={14} className="sm:w-4 sm:h-4" />
            <span className="inline">Sign Out</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default EmployHeader;
