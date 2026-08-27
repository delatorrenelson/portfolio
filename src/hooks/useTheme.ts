import { useState, useEffect } from "react";

export enum THEME {
  light = "light", dark = "business"
}

export type Theme = THEME;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === THEME.light || savedTheme === THEME.dark) {
      return savedTheme;
    }
    return THEME.dark;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === THEME.light ? THEME.dark : THEME.light));
  };

  return { theme, toggleTheme };
}
