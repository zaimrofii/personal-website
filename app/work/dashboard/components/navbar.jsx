"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  LayoutDashboard,
  ShoppingBag,
  FolderKanban,
  User,
  Settings,
  Building2,
  Newspaper,
  Share2,
  Circle,
} from "lucide-react";

const sidebarData = [
  {
    title: "Dashboard",
    items: [
      { label: "Overview", icon: LayoutDashboard },
      { label: "Ecommerce", icon: ShoppingBag },
      { label: "Projects", icon: FolderKanban },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "User Profile",
        icon: User,
        sub: ["Overview", "Projects", "Campaigns", "Documents", "Follower"],
      },
      {
        label: "Account",
        icon: Settings,
        sub: ["Settings", "Billing", "Security", "Notifications"],
      },
      {
        label: "Corporate",
        icon: Building2,
        sub: ["Overview", "Teams", "Partners", "Reports"],
      },
      {
        label: "Blog",
        icon: Newspaper,
        sub: ["All Posts", "Create Post", "Categories"],
      },
      {
        label: "Social",
        icon: Share2,
        sub: ["Feed", "Groups", "Messages", "Events"],
      },
    ],
  },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <aside className="w-64  text-gray-800  dark:text-gray-100 min-h-screen p-4">
      <div className="flex items-center gap-3 mb-4 dark:bg-red-500">
        <img
          src="/portofolio1.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-medium">John Doe</span>
      </div>
      <div className=" w-auto h-[88vh] overflow-y-auto">
        <div className="p-4 mb-5">
          {/* Foto Profil + Nama */}

          <div className="flex gap-3 text-sm text-gray-800 mb-4">
            <button className="hover:text-blue-400">Recently</button>
            <button className="hover:text-blue-400">Favorites</button>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-800">
            <button className="flex items-center gap-2 hover:text-blue-400">
              <Circle size={8} fill="currentColor" />
              Overview
            </button>
            <button className="flex items-center gap-2 hover:text-blue-400">
              <Circle size={8} fill="currentColor" />
              Projects
            </button>
          </div>
        </div>
        {/* dashboard dan projects */}

        {sidebarData.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h2 className="text-xs uppercase text-gray-400 font-bold mb-2">
              {section.title}
            </h2>
            <ul>
              {section.items.map((item, i) => {
                const Icon = item.icon;
                const isOpen = openMenus[item.label] || false;

                return (
                  <li key={i} className="mb-1">
                    <button
                      onClick={() => (item.sub ? toggleMenu(item.label) : null)}
                      className="flex text-xs xl:text-sm items-center justify-start w-full px-3 py-2 rounded hover:bg-gray-50"
                    >
                      {item.sub && !isOpen && (
                        <ChevronRight
                          size={16}
                          className="text-gray-800 dark:text-gray-100"
                        />
                      )}
                      <span className="flex items-center gap-2">
                        <Icon size={18} />
                        {item.label}
                      </span>
                    </button>

                    {/* Sub Menu */}
                    {item.sub && isOpen && (
                      <ul className="ml-6 mt-1 text-xs xl:text-sm text-gray-600 dark:text-gray-100">
                        {item.sub.map((subItem, si) => (
                          <li
                            key={si}
                            className="px-2 py-1 rounded hover:bg-gray-50 cursor-pointer"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
