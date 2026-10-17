import React from "react";
import { Calendar, Tag, CheckCircle2, XCircle, Clock } from "lucide-react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  return (
    <div className="theme-card p-6 bg-white flex flex-col justify-between border-t-4 border-t-amber-500 relative">
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
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

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between gap-2">
        <button
          onClick={onFail}
          className="flex items-center gap-1 py-1.5 px-3 rounded-full border border-neutral-200 text-neutral-600 hover:text-rose-600 hover:border-rose-300 text-xs font-medium transition-all cursor-pointer"
        >
          <XCircle size={13} />
          <span>Report Issue</span>
        </button>

        <button
          onClick={onComplete}
          className="flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs transition-all cursor-pointer"
        >
          <CheckCircle2 size={13} />
          <span>Mark Done</span>
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
