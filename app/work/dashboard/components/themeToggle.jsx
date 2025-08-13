"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // hanya render setelah komponen sudah mounted di client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // atau loading spinner / skeleton

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border rounded"
    >
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
