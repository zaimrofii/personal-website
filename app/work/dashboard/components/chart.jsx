"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// Fungsi format angka jadi "k"
const formatK = (value) => {
  if (value >= 1000) {
    return `${value / 1000}k`;
  }
  return value;
};

// Data Line Chart (naik-turun)
const lineData = [
  { month: "Jan", users: 12000, projects: 3000 },
  { month: "Feb", users: 15000, projects: 8000 },
  { month: "Mar", users: 10000, projects: 20000 },
  { month: "Apr", users: 20000, projects: 15000 },
  { month: "May", users: 15000, projects: 8000 },
  { month: "Jun", users: 25000, projects: 18000 },
  { month: "Jul", users: 18000, projects: 30000 },
];

// Data Traffic by Website
const websiteTraffic = [
  { name: "Google", value: 30 },
  { name: "YouTube", value: 65 },
  { name: "Instagram", value: 40 },
  { name: "Pinterest", value: 50 },
  { name: "Facebook", value: 35 },
  { name: "Twitter", value: 25 },
];

// Data Bar Chart (naik-turun)
const barData = [
  { name: "Linux", value: 15000 },
  { name: "Mac", value: 25000 },
  { name: "iOS", value: 10000 },
  { name: "Windows", value: 30000 },
  { name: "Android", value: 20000 },
  { name: "Other", value: 12000 },
];

// Data Donut Chart
const locationData = [
  { name: "United States", value: 62 },
  { name: "Canada", value: 22 },
  { name: "Mexico", value: 13 },
  { name: "Other", value: 13 },
];

const COLORS = ["#a19deaff", "#86dbeaff", "#595959ff", "#93acffff"];

export default function Chart() {
  return (
    <div className="mt-2 lg:mt-4 xl:mt-6 w-[96%] mx-auto space-y-6">
      {/* Atas */}
      <div className="flex justify-between">
        {/* Kiri - Line Chart */}
        <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg py-4 w-[74%] h-90 xl:h-110 ">
          <div className="flex items-center mb-14 ml-2">
            <h2 className="text-xs lg:text-sm xl:text-base text-gray-400">
              <span className="font-bold text-gray-800 mx-2 xl:mx-4">
                Total User
              </span>
              Total Project Operating Status
            </h2>
            <div className="flex gap-2 xl:gap-4 font-semibold text-xs lg:text-sm xl:text-md text-gray-800 ml-2 items-center">
              <h1 className="mx-1">|</h1>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="yearOption"
                  className="w-2 xl:w-4 w-2 xl:h-4 rounded-full border-gray-400 text-blue-500 focus:ring-blue-500"
                  defaultChecked
                />
                <p className="hover:text-black">This Year</p>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="yearOption"
                  className="w-2 xl:w-4 w-2 xl:h-4 rounded-full border-gray-400 text-blue-500 focus:ring-blue-500"
                />
                <p className="hover:text-black">Last Year</p>
              </label>
            </div>
          </div>
          <ResponsiveContainer width="95%" height="80%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="none" />

              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                fontSize={"14px"}
                padding={{ left: 20, right: 20 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                padding={{ left: 20, right: 20 }}
                margin={{ left: 2, right: 20 }}
                tickFormatter={formatK}
                fontSize={"14px"}
                ticks={[0, 10000, 20000, 30000]}
              />
              <Tooltip formatter={(value) => [formatK(value), ""]} />

              <Line
                type="monotone"
                dataKey="users"
                stroke="#4e4e4eff"
                strokeWidth={2}
                dot={false}
                activeDot={false}
              />
              <Line
                type="monotone"
                dataKey="projects"
                stroke="#cececeff"
                strokeWidth={2}
                dot={false}
                activeDot={false}
                strokeDasharray="5 5"
              />

              <Area
                type="monotone"
                dataKey="users"
                stroke="none"
                fill="url(#colorUv)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Kanan - Traffic by Website */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 w-[24%]">
          <h2 className="text-sm xl:text-lg font-bold mb-4">
            Traffic by Website
          </h2>
          <div className="space-y-3">
            {websiteTraffic.map((item, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row items-center">
                <div className="flex justify-between mb-1">
                  <span className="text-xs xl:text-sm w-20">{item.name}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 rounded bg-blue-500"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bawah */}
      <div className="flex flex-col lg:flex-row justify-between ">
        {/* Kiri - Bar Chart */}
        <div className="bg-gray-50 rounded-lg shadow py-4 hover:shadow-lg  w-full xl:w-[49%] h-80 xl:h-100 mb-10">
          <h1 className="mb-12 font-semibold ml-4">Traffic by Device</h1>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="none" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                fontSize={"14px"}
              />
              <YAxis
                domain={[0, 30000]}
                ticks={[0, 10000, 20000, 30000]}
                axisLine={false}
                tickLine={false}
                padding={{ left: 40, bottom: 20 }}
                tickFormatter={formatK}
                fontSize={"14px"}
              />
              <Tooltip formatter={(value) => [formatK(value), ""]} />
              <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={35}>
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Kanan - Donut Chart */}
        <div className="bg-gray-50 rounded-lg shadow hover:shadow-lg w-full xl:w-[49%]  h-80 xl:h-100 mb-10">
          <h2 className="text-lg font-bold mb-4 ml-6">Traffic by Location</h2>
          <div className="flex items-center px-8 ">
            <div className="flex-1">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={locationData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    label
                  >
                    {locationData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="ml-6 space-y-2 w-[40%]">
              {locationData.map((entry, index) => (
                <div key={index} className="flex items-center space-x-2 py-1">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  <span className="text-sm font-medium flex justify-between w-full">
                    <p>{entry.name}</p> <p>{entry.value}%</p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
