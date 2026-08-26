import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle text-xl transition-transform duration-300 hover:rotate-12"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <FaSun className="text-warning text-2xl transition-all duration-300" />
      ) : (
        <FaMoon className="text-secondary text-2xl transition-all duration-300" />
      )}
    </button>
  );
}
