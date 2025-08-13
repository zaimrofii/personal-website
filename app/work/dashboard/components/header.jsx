"use client";
import React from "react";
import { Book, Star, Search, Sun, Clock, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full  bg-white dark:bg-red-200 flex justify-between items-center px-2 xl:px-4 py-3 xl:py-4 border-b border-gray-100 ">
      {/* Kiri */}
      <div className="flex items-center gap-4">
        <Book className="text-gray-600 h-4 w-4 xl:h-6 xl:w-6" />
        <Star className="text-gray-600 h-4 w-4 xl:h-6 xl:w-6" />

        <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">
          Dashboard
        </button>
      </div>

      {/* Kanan */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 w-30 xl:w-50 py-1 text-sm rounded-xl bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        {/* Icons */}
        <Sun className="text-gray-600  h-4 w-4 xl:h-5 xl:w-5 cursor-pointer" />
        <Clock className="text-gray-600  h-4 w-4 xl:h-5 xl:w-5 cursor-pointer" />
        <Bell className="text-gray-600  h-4 w-4 xl:h-5 xl:w-5 cursor-pointer" />
        <Book className="text-gray-600  h-4 w-4 xl:h-5 xl:w-5 cursor-pointer" />
      </div>
    </header>
  );
}
