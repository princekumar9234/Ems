import React from "react";
import { Calendar, Tag, CheckCircle2 } from "lucide-react";

const CompletedTask = ({ data }) => {
  return (
    <div className="theme-card p-6 bg-white flex flex-col justify-between border-t-4 border-t-emerald-500 opacity-95">
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Tag size={12} />
            <span>{data.category || "General"}</span>
          </span>

          <div className="flex items-center gap-1 text-xs font-medium text-neutral-500">
            <Calendar size={13} className="text-neutral-400" />
            <span>{data.taskDate}</span>
          </div>
        </div>

        {/* Title */}
        <h4 className="text-base md:text-lg font-bold text-neutral-900 tracking-tight mb-2 line-clamp-1">
          {data.taskTitle}
        </h4>

        {/* Description */}
        <p className="text-xs md:text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
          {data.taskDescription}
        </p>
      </div>

      {/* Status Footer */}
      <div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <CheckCircle2 size={13} />
          <span>Completed</span>
        </span>
        <span className="text-[11px] text-neutral-400">Delivered</span>
      </div>
    </div>
  );
};

export default CompletedTask;
