import { ChevronLeft } from "lucide-react";
import Sidebar from "./components/navbar";
import RightSidebar from "./components/rightSidebar";
import { ThemeProvider } from "next-themes";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex h-screen overflow-y-hidden">
        <aside className="relative w-48 xl:w-64 border-r border-gray-200 p-4">
          <Sidebar />
          <Link href={"/work"}>
            <button className="flex bg-gradient-to-tl from-red-600 to-red-300 border-b-2  border-black/30 cursor-pointer hover:scale-105 transition absolute bottom-10 left-10 animate-pulse px-6 py-4 text-white rounded-full">
              <ChevronLeft /> Back
            </button>
          </Link>
        </aside>
        <main className="flex-1 px-6 h-screen overflow-auto">{children}</main>
        <aside className="w-50 xl:w-68 bg-gray-100 p-2">
          <RightSidebar />
        </aside>
      </div>
    </ThemeProvider>
  );
}
