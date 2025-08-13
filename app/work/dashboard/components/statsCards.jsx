"use client";
import React from "react";

const statsData = [
  { title: "Views", value: "7,265", percent: "+11%" },
  { title: "Visits", value: "5,842", percent: "+8%" },
  { title: "New Users", value: "1,234", percent: "+6%" },
  { title: "Active Users", value: "3,456", percent: "+9%" },
];

export default function StatsCards() {
  return (
    <div className="mt-4 xl:mt-8 w-[96%] mx-auto">
      <h1 className="text-xl xl:text-2xl ml-4 font-semibold">Overview</h1>
      <div className="flex justify-between mt-4">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 xl:p-6 rounded-xl text-white shadow-md w-[24%] ${
              idx % 2 === 0
                ? "bg-gradient-to-br from-blue-500 to-blue-700"
                : "bg-gradient-to-br from-teal-500 to-teal-700"
            }`}
          >
            <h3 className="text-xs xl:text-sm font-medium opacity-90">
              {item.title}
            </h3>
            <div className="flex justify-between">
              <p className="md:text-xl lg:text-2xl xl:text-3xl font-semibold">
                {item.value}
              </p>
              <p className="text-sm font-semibold text-teal-200">
                {item.percent}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
