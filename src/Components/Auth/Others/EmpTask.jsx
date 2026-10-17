import React, { useState } from "react";
import AcceptTask from "../TaskList/AcceptTask";
import NewTask from "../TaskList/NewTask";
import CompletedTask from "../TaskList/CompletedTask";
import FailTask from "../TaskList/FailTask";
import { Layers, Inbox } from "lucide-react";

const EmpTask = ({ data, onUpdateStatus }) => {
  const [filter, setFilter] = useState("all");

  if (!data || !data.tasks) return null;

  const tasks = data.tasks;

  const filteredTasks = tasks.map((t, idx) => ({ ...t, originalIndex: idx })).filter((t) => {
    if (filter === "new") return t.newTask;
    if (filter === "active") return t.active;
    if (filter === "completed") return t.completed;
    if (filter === "failed") return t.failed;
    return true;
  });

  const counts = {
    all: tasks.length,
    new: tasks.filter((t) => t.newTask).length,
    active: tasks.filter((t) => t.active).length,
    completed: tasks.filter((t) => t.completed).length,
    failed: tasks.filter((t) => t.failed).length,
  };

  return (
    <div className="w-full mt-6 mb-16">
      {/* Header and Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="eyebrow-tag mb-2">Assigned Tasks</div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Your task board
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            Accept incoming assignments, update ongoing progress, and verify completions.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-2xl border border-[#EFEBE4] shadow-2xs">
          {[
            { id: "all", label: "All", count: counts.all },
            { id: "new", label: "New", count: counts.new },
            { id: "active", label: "In Progress", count: counts.active },
            { id: "completed", label: "Completed", count: counts.completed },
            { id: "failed", label: "Issues", count: counts.failed },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                filter === tab.id
                  ? "bg-[#BC1B39] text-white shadow-2xs"
                  : "text-neutral-600 hover:text-neutral-900 hover:bg-[#FAF7F2]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  filter === tab.id
                    ? "bg-white/25 text-white"
                    : "bg-[#F4F0E8] text-neutral-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Task Cards Grid */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTasks.map((elem) => {
            const idx = elem.originalIndex;

            if (elem.newTask) {
              return (
                <NewTask
                  key={idx}
                  data={elem}
                  onAccept={() => onUpdateStatus && onUpdateStatus(idx, "accept")}
                />
              );
            }
            if (elem.active) {
              return (
                <AcceptTask
                  key={idx}
                  data={elem}
                  onComplete={() => onUpdateStatus && onUpdateStatus(idx, "complete")}
                  onFail={() => onUpdateStatus && onUpdateStatus(idx, "fail")}
                />
              );
            }
            if (elem.completed) {
              return <CompletedTask key={idx} data={elem} />;
            }
            if (elem.failed) {
              return <FailTask key={idx} data={elem} />;
            }
            return null;
          })}
        </div>
      ) : (
        <div className="theme-card p-12 bg-white text-center flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-neutral-400 flex items-center justify-center mb-3">
            <Inbox size={24} />
          </div>
          <h4 className="text-base font-bold text-neutral-800">No tasks found</h4>
          <p className="text-xs text-neutral-500 mt-1 max-w-sm">
            There are currently no tasks matching the "{filter}" filter. Check other filters to view all assignments.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmpTask;
