import React from "react";
import { Sparkles, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const EmpTaskList = ({ data }) => {
  if (!data || !data.taskCounts) return null;

  const statCards = [
    {
      label: "New Tasks",
      count: data.taskCounts.newTask || 0,
      subtext: "Awaiting your review",
      icon: <Sparkles size={18} />,
      badgeBg: "bg-[#FEECEF]",
      badgeColor: "text-[#BC1B39]",
      borderColor: "border-[#FAD4DC]",
    },
    {
      label: "Active Tasks",
      count: data.taskCounts.active || 0,
      subtext: "Currently in progress",
      icon: <Clock size={18} />,
      badgeBg: "bg-amber-50",
      badgeColor: "text-amber-700",
      borderColor: "border-amber-200",
    },
    {
      label: "Completed",
      count: data.taskCounts.completed || 0,
      subtext: "Successfully delivered",
      icon: <CheckCircle2 size={18} />,
      badgeBg: "bg-emerald-50",
      badgeColor: "text-emerald-700",
      borderColor: "border-emerald-200",
    },
    {
      label: "Failed / Issues",
      count: data.taskCounts.failed || 0,
      subtext: "Requires follow-up",
      icon: <AlertTriangle size={18} />,
      badgeBg: "bg-rose-50",
      badgeColor: "text-[#BC1B39]",
      borderColor: "border-rose-200",
    },
  ];

  return (
    <div className="w-full mb-8">
      <div className="eyebrow-tag mb-3">Work Overview</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {statCards.map((stat, idx) => (
          <div
            key={idx}
            className="theme-card p-5 md:p-6 bg-white flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {stat.label}
              </span>
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.badgeBg} ${stat.badgeColor} border ${stat.borderColor}`}
              >
                {stat.icon}
              </div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
                {stat.count}
              </div>
              <p className="text-xs text-neutral-500 mt-1">{stat.subtext}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpTaskList;
