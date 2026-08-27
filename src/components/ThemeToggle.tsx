import { THEME, Theme } from "../hooks/useTheme";
import { PiSun, PiMoonStarsLight } from "react-icons/pi";

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  const isDark = theme === THEME.dark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle text-xl transition-transform duration-300 hover:rotate-12"
      aria-label={`Switch to ${isDark ? THEME.dark : THEME.light} mode`}
      title={`Switch to ${isDark ? THEME.dark : THEME.light} mode`}
    >
      {isDark ? (
        <PiSun className="text-primary text-2xl transition-all duration-300" />
      ) : (
        <PiMoonStarsLight className="text-primary text-2xl transition-all duration-300" />
      )}
    </button>
  );
}
