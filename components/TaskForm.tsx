"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import api from "@/services/api";
import toast from "react-hot-toast";

export default function TaskForm({ refresh }: any) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");




const addTask = async () => {
  if (!title.trim()) return toast.error("Task cannot be empty");

  try {
    await api.post("/tasks", { title, deadline }); // ✅ FIXED
    setTitle("");
    setDeadline(""); // ✅ RESET
    refresh();
    toast.success("Task added 🎉");
  } catch {
    toast.error("Failed to add task");
  }
};

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-5">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
  className="p-2 rounded bg-white/10 border border-white/20 text-white"
/>

      <button
        onClick={addTask}
        className="flex items-center gap-2 bg-indigo-500 px-4 py-2 rounded-xl hover:bg-indigo-600 transition shadow-lg"
      >
        <PlusCircle size={18} /> Add
      </button>
    </div>
  );
}