import React from "react";
import { Calendar, Tag, ArrowRight, Sparkles, Paperclip } from "lucide-react";

const NewTask = ({ data, onAccept }) => {
  return (
    <div className="theme-card p-6 bg-white flex flex-col justify-between border-t-4 border-t-[#BC1B39] relative">
      <div>
        {/* Top Header: Category & Date */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FEECEF] text-[#BC1B39] border border-[#FAD4DC]">
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

        {/* Attachment preview if any */}
        {data.attachment && (
          <div className="flex items-center gap-1.5 text-[11px] text-[#BC1B39] bg-[#FAF7F2] p-2 rounded-xl mb-4 border border-[#EFEBE4]">
            <Paperclip size={12} />
            <span className="truncate">{data.attachment}</span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-[#F2EFE9] flex items-center justify-between">
        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-500">
          <Sparkles size={12} className="text-[#BC1B39]" />
          <span>New assignment</span>
        </span>

        <button
          onClick={onAccept}
          className="btn-crimson py-2 px-4 rounded-full text-xs font-semibold cursor-pointer"
        >
          <span>Accept Task</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};

export default NewTask;
