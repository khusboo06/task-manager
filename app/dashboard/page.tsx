


"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Protected from "@/components/Protected";
import TaskForm from "@/components/TaskForm";
import TaskCard from "@/components/TaskCard";
import SearchBar from "@/components/SearchBar";
import api from "@/services/api";
import {
  ListChecks,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 🔁 Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔄 Fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        `/tasks?search=${debouncedSearch}&status=${status}&page=${page}&limit=5`
      );

      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [debouncedSearch, status, page]);

  // 📊 Stats
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <Protected>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black px-3 sm:px-4 py-6">

        {/* 🔝 HEADER */}
        <div className="max-w-5xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            📊 Dashboard
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Manage your tasks efficiently
          </p>
        </div>

        {/* 📊 STATS */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <ListChecks className="text-indigo-400" />
              <div>
                <p className="text-gray-400 text-sm">Total Tasks</p>
                <h2 className="text-lg sm:text-xl font-bold text-white">{total}</h2>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-400" />
              <div>
                <p className="text-gray-400 text-sm">Completed</p>
                <h2 className="text-lg sm:text-xl font-bold text-white">{completed}</h2>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <Clock className="text-yellow-400" />
              <div>
                <p className="text-gray-400 text-sm">Pending</p>
                <h2 className="text-lg sm:text-xl font-bold text-white">{pending}</h2>
              </div>
            </div>
          </div>

        </div>

        {/* 🧾 MAIN */}
        <div className="max-w-5xl mx-auto">

          {/* ➕ ADD TASK */}
          <TaskForm refresh={fetchTasks} />

          {/* 🔽 FILTER + SEARCH */}
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center mt-4">

            {/* STATUS FILTER */}
            <select
              value={status}
              onChange={(e) => {
                setPage(1);
                setStatus(e.target.value);
              }}
              className="p-2 rounded bg-white/10 text-white w-full sm:w-auto"
            >
              <option className="text-black" value="">All Tasks</option>
              <option className="text-black" value="true">Completed</option>
              <option className="text-black" value="false">Pending</option>
            </select>

            {/* SEARCH */}
            <div className="w-full">
              <SearchBar setSearch={setSearch} />
            </div>

          </div>

          {/* 🎯 PAGINATION (MOVED HERE - RIGHT SIDE) */}
          <div className="flex justify-end items-center gap-3 mt-6">

            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-indigo-500 transition shadow-md disabled:opacity-40"
              disabled={page === 1}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/10 text-white text-sm font-medium shadow">
              Page {page}
            </div>

            <button
              onClick={() => setPage((p) => p + 1)}
              className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-indigo-500 transition shadow-md"
            >
              <ChevronRight size={20} />
            </button>

          </div>

          {/* 📋 TASK LIST */}
          <div className="space-y-4 mt-4">

            {loading ? (
              <div className="text-center text-gray-400 mt-10">
                Loading tasks...
              </div>
            ) : tasks.length === 0 ? (
              <div className="text-center text-gray-400 mt-10">
                No tasks found 😔
              </div>
            ) : (
              tasks.map((task) => (
                <TaskCard key={task.id} task={task} refresh={fetchTasks} />
              ))
            )}

          </div>

        </div>
      </div>
    </Protected>
  );
}