import React, { useContext, useState } from "react";
import { AuthContextCreate } from "../Context/AuthContext";
import { Users, Search, CheckCircle, Clock, AlertTriangle, Sparkles } from "lucide-react";

const AllTaskAdmin = () => {
  const [userData] = useContext(AuthContextCreate);
  const [searchQuery, setSearchQuery] = useState("");

  if (!userData || !Array.isArray(userData)) {
    return null;
  }

  const filteredEmployees = userData.filter((emp) =>
    emp.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (emp.email && emp.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-full mt-10 sm:mt-12 mb-12 sm:mb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div>
          <div className="eyebrow-tag mb-1.5 sm:mb-2">Team Overview</div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Employee task directory
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-neutral-600">
            Real-time tracking of team assignments, ongoing tasks, and delivery rates.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search employee..."
            className="input-box pl-9 text-xs py-2 sm:py-2.5 rounded-full"
          />
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
        </div>
      </div>

      {/* Main Table Card */}
      <div className="theme-card bg-white overflow-hidden">
        {/* Desktop Table View (>= 768px) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#EFEBE4] bg-[#FAF8F5]/60 text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                <th className="py-4 px-6">Employee</th>
                <th className="py-4 px-4 text-center">New Tasks</th>
                <th className="py-4 px-4 text-center">Active</th>
                <th className="py-4 px-4 text-center">Completed</th>
                <th className="py-4 px-4 text-center">Failed</th>
                <th className="py-4 px-6 text-right">Completion Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2EFE9] text-sm">
              {filteredEmployees.map((emp, idx) => {
                const total =
                  (emp.taskCounts?.newTask || 0) +
                  (emp.taskCounts?.active || 0) +
                  (emp.taskCounts?.completed || 0) +
                  (emp.taskCounts?.failed || 0);
                const completed = emp.taskCounts?.completed || 0;
                const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

                return (
                  <tr
                    key={emp.id || idx}
                    className="hover:bg-[#FAF8F5]/70 transition-colors"
                  >
                    {/* Employee Avatar & Info */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#FEECEF] text-[#BC1B39] font-bold text-sm flex items-center justify-center border border-[#FAD4DC] shrink-0">
                          {emp.firstName ? emp.firstName.charAt(0).toUpperCase() : "U"}
                        </div>
                        <div>
                          <span className="font-bold text-neutral-900 block">
                            {emp.firstName}
                          </span>
                          <span className="text-xs text-neutral-500 block">
                            {emp.email}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* New Tasks */}
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200">
                        {emp.taskCounts?.newTask || 0}
                      </span>
                    </td>

                    {/* Active Tasks */}
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                        {emp.taskCounts?.active || 0}
                      </span>
                    </td>

                    {/* Completed */}
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {emp.taskCounts?.completed || 0}
                      </span>
                    </td>

                    {/* Failed */}
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2.5 rounded-full text-xs font-bold bg-rose-50 text-[#BC1B39] border border-rose-200">
                        {emp.taskCounts?.failed || 0}
                      </span>
                    </td>

                    {/* Rate & Progress Bar */}
                    <td className="py-4 px-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <div className="w-20 bg-neutral-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#BC1B39] h-full rounded-full transition-all duration-500"
                            style={{ width: `${rate}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-neutral-800 w-9 text-right">
                          {rate}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards View (< 768px) */}
        <div className="block md:hidden divide-y divide-[#F2EFE9]">
          {filteredEmployees.map((emp, idx) => {
            const total =
              (emp.taskCounts?.newTask || 0) +
              (emp.taskCounts?.active || 0) +
              (emp.taskCounts?.completed || 0) +
              (emp.taskCounts?.failed || 0);
            const completed = emp.taskCounts?.completed || 0;
            const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

            return (
              <div key={emp.id || idx} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#FEECEF] text-[#BC1B39] font-bold text-xs flex items-center justify-center border border-[#FAD4DC] shrink-0">
                      {emp.firstName ? emp.firstName.charAt(0).toUpperCase() : "U"}
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-neutral-900 text-sm block truncate">
                        {emp.firstName}
                      </span>
                      <span className="text-[11px] text-neutral-500 block truncate">
                        {emp.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-800 shrink-0">
                    {rate}% done
                  </span>
                </div>

                {/* 4 Stat Badges Mini Grid */}
                <div className="grid grid-cols-4 gap-1.5 text-center pt-1">
                  <div className="bg-sky-50 border border-sky-200 rounded-xl py-1 px-1">
                    <span className="text-[10px] text-sky-600 block font-medium">New</span>
                    <span className="text-xs font-bold text-sky-800">{emp.taskCounts?.newTask || 0}</span>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl py-1 px-1">
                    <span className="text-[10px] text-amber-600 block font-medium">Active</span>
                    <span className="text-xs font-bold text-amber-800">{emp.taskCounts?.active || 0}</span>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl py-1 px-1">
                    <span className="text-[10px] text-emerald-600 block font-medium">Done</span>
                    <span className="text-xs font-bold text-emerald-800">{emp.taskCounts?.completed || 0}</span>
                  </div>
                  <div className="bg-rose-50 border border-rose-200 rounded-xl py-1 px-1">
                    <span className="text-[10px] text-rose-600 block font-medium">Issues</span>
                    <span className="text-xs font-bold text-[#BC1B39]">{emp.taskCounts?.failed || 0}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-[#BC1B39] h-full rounded-full transition-all duration-500"
                    style={{ width: `${rate}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEmployees.length === 0 && (
          <div className="p-8 text-center text-xs sm:text-sm text-neutral-500">
            No employees matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTaskAdmin;
