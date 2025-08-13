"use client";
import React from "react";
import {
  Bug,
  UserPlus,
  BellRing,
  CheckCircle,
  Mail,
  // import icon lain kalau perlu
} from "lucide-react";

const notifications = [
  {
    icon: <Bug className="w-5 h-5 text-blue-500" />,
    title: "You fixed a bug",
    sub: "just now",
  },
  {
    icon: <UserPlus className="w-5 h-5 text-green-500" />,
    title: "New User Registered",
    sub: "59 minutes ago",
  },
  {
    icon: <Bug className="w-5 h-5 text-blue-500" />,
    title: "You fixed a bug",
    sub: "12 hours ago",
  },
  {
    icon: <BellRing className="w-5 h-5 text-yellow-500" />,
    title: "Andi Line Subscribed to you",
    sub: "today 11:59 am",
  },
];

const activities = [
  {
    photo: "https://i.pravatar.cc/32?img=1",
    title: "Changed the style",
    sub: "just now",
  },
  {
    photo: "https://i.pravatar.cc/32?img=2",
    title: "Released a new version",
    sub: "59 minutes ago",
  },
  {
    photo: "https://i.pravatar.cc/32?img=3",
    title: "Submitted a bug",
    sub: "12 hours ago",
  },
  {
    photo: "https://i.pravatar.cc/32?img=4",
    title: "Modified a data in page",
    sub: "today 11:58 am",
  },
  {
    photo: "https://i.pravatar.cc/32?img=5",
    title: "Deleted a Page in project X",
    sub: "Feb 2, 2025",
  },
];

const contacts = [
  { photo: "https://i.pravatar.cc/32?img=6", name: "Natalie Craig" },
  { photo: "https://i.pravatar.cc/32?img=7", name: "Drew Cano" },
  { photo: "https://i.pravatar.cc/32?img=8", name: "Andi Lane" },
  { photo: "https://i.pravatar.cc/32?img=9", name: "Koray Okumus" },
  { photo: "https://i.pravatar.cc/32?img=10", name: "Kate Morrison" },
  { photo: "https://i.pravatar.cc/32?img=11", name: "Melody Maci" },
];

export default function RightSidebar() {
  return (
    <div className="w-full h-[100%]  overflow-y-auto p-4 space-y-6 font-sans text-gray-800">
      {/* Notifications */}
      <section>
        <h3 className="text-md xl:text-lg font-semibold mb-3">Notifications</h3>
        <ul className="space-y-4">
          {notifications.map(({ icon, title, sub }, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-[12px] xl:text-sm"
            >
              <div className="mt-1">{icon}</div>
              <div>
                <p className="font-medium">{title}</p>
                <p className="text-[10px] text-gray-500">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Activities */}
      <section>
        <h3 className="text-md xl:text-lg font-semibold mb-3">Activities</h3>
        <ul className="space-y-4">
          {activities.map(({ photo, title, sub }, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3  text-[12px] xl:text-sm"
            >
              <img
                src={photo}
                alt="avatar"
                className="w-6 h-6 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p className="font-medium">{title}</p>
                <p className="text-[10px] text-gray-500">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h3 className="text-md xl:text-lg font-semibold mb-3">Contact</h3>
        <ul className="space-y-3  text-sm">
          {contacts.map(({ photo, name }, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-xs xl:text-sm cursor-pointer hover:bg-gray-100 rounded-md p-1"
            >
              <img
                src={photo}
                alt={name}
                className="w-6 h-6 rounded-full object-cover flex-shrink-0"
              />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
