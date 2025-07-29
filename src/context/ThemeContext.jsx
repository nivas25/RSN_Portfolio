import React, { createContext, useState, useEffect, useContext } from "react";

// Create a new context for theme management
const ThemeContext = createContext();

// ThemeProvider component wraps the app and provides theme state
export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to "light"
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Sync theme changes with <body> and localStorage
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark modes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Provide theme and toggle function to children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};
