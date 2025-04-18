import React, { createContext, useContext, useEffect, useState } from "react";

const THEME_KEY = "manish-karki-is-dark-theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return true;

    const stored = localStorage.getItem(THEME_KEY);
    if (stored !== null) return stored === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Update body class
  useEffect(() => {
    const root = document.body;
    root.classList.remove(isDarkMode ? "light" : "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
