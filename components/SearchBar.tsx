"use client";

import { Search } from "lucide-react";

export default function SearchBar({ setSearch }: any) {
  return (
    <div className="relative mb-4">
      <Search className="absolute left-3 top-3 text-gray-400" size={18} />

      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  );
}