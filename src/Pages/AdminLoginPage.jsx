import React, { useState, useEffect, useContext } from "react";
import { AuthContextCreate } from "../Context/AuthContext";
import {
  Briefcase,
  UserCheck,
  Tag,
  Calendar,
  ArrowRight,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  X,
  FileText,
} from "lucide-react";

const AdminLoginPage = () => {
  const [userData, setUserData] = useContext(AuthContextCreate);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);

  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" | "error"

  // Auto-hide toast after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const triggerToast = (msg, type = "success") => {
    setToastMsg(msg);
    setToastType(type);
    setShowToast(true);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile(file.name);
      triggerToast(`Attachment added: ${file.name}`, "success");
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!userData || userData.length === 0) {
      triggerToast("No employee records found in system.", "error");
      return;
    }

    const employeeFound = userData.some(
      (elem) => elem.firstName.toLowerCase() === assign.trim().toLowerCase()
    );

    if (!employeeFound) {
      triggerToast(`Employee "${assign}" not found. Please choose a valid team member.`, "error");
      return;
    }

    const newTaskObj = {
      taskTitle: taskTitle.trim(),
      taskDescription: taskDescription.trim(),
      taskDate: taskDate || new Date().toISOString().split("T")[0],
      category: category.trim() || "General",
      attachment: attachedFile || null,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map((elem) => {
      if (elem.firstName.toLowerCase() === assign.trim().toLowerCase()) {
        return {
          ...elem,
          tasks: [newTaskObj, ...elem.tasks],
          taskCounts: {
            ...elem.taskCounts,
            newTask: (elem.taskCounts.newTask || 0) + 1,
          },
        };
      }
      return elem;
    });

    setUserData(updatedData);
    localStorage.setItem("employee", JSON.stringify(updatedData));

    triggerToast(`Task "${taskTitle}" successfully assigned to ${assign}!`, "success");

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
    setAssign("");
    setAttachedFile(null);
  };

  return (
    <div className="w-full">
      {/* Toast Notification */}
      <div
        className={`fixed top-4 sm:top-6 right-3 sm:right-6 left-3 sm:left-auto z-50 sm:max-w-md transition-all duration-300 transform ${
          showToast ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 pointer-events-none scale-95"
        }`}
      >
        <div className="bg-white border border-[#EFEBE4] shadow-xl rounded-2xl p-3.5 sm:p-4 flex items-start gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              toastType === "success"
                ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                : "bg-rose-50 text-[#BC1B39] border border-rose-100"
            }`}
          >
            {toastType === "success" ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
          </div>
          <div className="flex-1 pr-2">
            <h4 className="text-sm font-bold text-neutral-900">
              {toastType === "success" ? "Task Notification" : "Action Needed"}
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">{toastMsg}</p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-neutral-400 hover:text-neutral-700 cursor-pointer p-1"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Main Header matching the reference image */}
      <div className="mb-6 sm:mb-8">
        <div className="eyebrow-tag mb-2">Task Assignment</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
          Create and assign new task
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed">
          Paste the task description, select the team member, attach resources, and set the deadline. We'll deliver it straight to their dashboard.
        </p>
      </div>

      {/* Form matching the layout of the reference image */}
      <form onSubmit={handleForm} className="space-y-5 sm:space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column: Task Description (Large Card) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="theme-card p-5 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="icon-badge">
                    <Briefcase size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Task description
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 mb-4">
                  Paste the full posting: responsibilities, requirements and tech deliverables.
                </p>

                <div className="relative rounded-2xl border border-[#E4DFD7] p-4 bg-white focus-within:border-[#BC1B39] focus-within:ring-2 focus-within:ring-[#BC1B39]/15 transition-all">
                  <textarea
                    rows={12}
                    required
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder="e.g. We need to implement the new employee profile screen with photo upload, form validation, and reactive state updates across the dashboard..."
                    className="w-full bg-transparent outline-none resize-none text-sm text-neutral-800 placeholder:text-neutral-400 leading-relaxed min-h-[220px]"
                  ></textarea>
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                    <span>{taskDescription.length} characters</span>
                    <span className="text-neutral-400">Detailed markdown supported</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Two Sub-Cards (Assignee/Deadline & Title/Category) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Top Right Card: Assignee & Deadline (with Reference Spec Upload) */}
            <div className="theme-card p-6 md:p-7">
              <div className="flex items-center gap-3 mb-2">
                <div className="icon-badge">
                  <UserCheck size={18} />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Assignee & Deadline</h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Select the team member and specify the target completion date.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Assign To
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      list="employee-options"
                      required
                      value={assign}
                      onChange={(e) => setAssign(e.target.value)}
                      placeholder="e.g. Arjun, Priya, Rahul..."
                      className="input-box text-sm"
                    />
                    <datalist id="employee-options">
                      {userData &&
                        userData.map((emp) => (
                          <option key={emp.id} value={emp.firstName}>
                            {emp.firstName} ({emp.email})
                          </option>
                        ))}
                    </datalist>
                  </div>
                  {/* Quick Pill Selection */}
                  {userData && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {userData.slice(0, 5).map((emp) => (
                        <button
                          type="button"
                          key={emp.id}
                          onClick={() => setAssign(emp.firstName)}
                          className={`text-xs px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                            assign.toLowerCase() === emp.firstName.toLowerCase()
                              ? "bg-[#BC1B39] text-white border-[#BC1B39]"
                              : "bg-[#FAF7F2] text-neutral-700 border-[#EFEBE4] hover:border-[#BC1B39]"
                          }`}
                        >
                          {emp.firstName}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Due Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={taskDate}
                      onChange={(e) => setTaskDate(e.target.value)}
                      className="input-box text-sm"
                    />
                  </div>
                </div>

                {/* Upload Spec Dropzone (Visual mirror of reference image) */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Task Spec & Docs
                  </label>
                  <label className="upload-dropzone p-4 flex flex-col items-center justify-center text-center cursor-pointer block">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.png,.jpg"
                    />
                    <div className="text-[#BC1B39] mb-1.5">
                      <UploadCloud size={22} className="mx-auto" />
                    </div>
                    <span className="text-xs font-bold text-neutral-900 block">
                      {attachedFile ? attachedFile : "Click to attach spec document"}
                    </span>
                    <span className="text-[11px] text-neutral-500 block mt-0.5">
                      {attachedFile ? "File ready for upload" : "PDF, Figma, or Word, up to 10 MB"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Bottom Right Card: Task Title & Category */}
            <div className="theme-card p-6 md:p-7">
              <div className="flex items-center gap-3 mb-2">
                <div className="icon-badge">
                  <Tag size={18} />
                </div>
                <h3 className="text-base font-bold text-neutral-900">Task details</h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Brief title and department classification for this assignment.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Task Title
                  </label>
                  <input
                    type="text"
                    required
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    placeholder="e.g. Redesign Dashboard UI"
                    className="input-box text-sm"
                  />
                  <div className="text-right text-[11px] text-neutral-400 mt-1">
                    {taskTitle.length} characters
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Category
                  </label>
                  <input
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Design, Frontend, Backend, DevOps"
                    className="input-box text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Primary Action Button matching the reference image */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 px-6 sm:px-8 btn-crimson text-sm sm:text-base md:text-lg font-bold rounded-full shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>Create and assign task</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
