import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext.jsx"; //

// Global styles
import "./assets/styles/global.css";

// Components and Pages
import Overlay from "./components/Overlay/Overlay.jsx";
import Hub from "./components/Hub/Hub.jsx";
import Repertoire from "./pages/Repertoire.jsx";
import Synopsis from "./pages/Synopsis.jsx";
import Nexus from "./pages/Nexus.jsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";

// Main App content component
function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme(); //Get the current theme from context

  const [isIntroDone, setIntroDone] = useState(false);

  // ADD THIS ENTIRE useEffect BLOCK
  useEffect(() => {
    // These colors match the --page-background variables in your global.css
    const darkThemeColor = "#060606";
    const lightThemeColor = "#fdfdfd";

    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement("meta");
      themeColorMeta.name = "theme-color";
      document.head.appendChild(themeColorMeta);
    }
    const newColor = theme === "dark" ? darkThemeColor : lightThemeColor;
    themeColorMeta.setAttribute("content", newColor);
  }, [theme]); // This runs every time the theme changes

  useEffect(() => {
    document.fonts.ready.then(() => {
      const introTimer = setTimeout(() => {
        setIntroDone(true);
      }, 2000); // intro delay only

      return () => clearTimeout(introTimer);
    });
  }, []);

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <div className="app-container" data-theme={theme}>
      <ThemeToggle />

      <AnimatePresence>{!isIntroDone && <Overlay />}</AnimatePresence>

      <LayoutGroup>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Hub onNavigate={handleNavigate} />} />
              <Route
                path="/repertoire"
                element={<Repertoire onNavigate={handleNavigate} />}
              />
              <Route
                path="/synopsis"
                element={<Synopsis onNavigate={handleNavigate} />}
              />
              <Route
                path="/nexus"
                element={<Nexus onNavigate={handleNavigate} />}
              />
            </Routes>
          </AnimatePresence>
        </div>
      </LayoutGroup>
    </div>
  );
}

// Main App wrapper
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
