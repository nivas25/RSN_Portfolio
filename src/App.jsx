import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext.jsx";

// Global styles
import "./assets/styles/global.css";

// Components and Pages
import Overlay from "./components/Overlay/Overlay.jsx";
import Hub from "./components/Hub/Hub.jsx";
import Repertoire from "./pages/Repertoire.jsx";
import Synopsis from "./pages/Synopsis.jsx";
import Nexus from "./pages/Nexus.jsx";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isIntroDone, setIntroDone] = useState(false);

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
    <ThemeProvider>
      <div className="app-container">
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
    </ThemeProvider>
  );
}

export default App;
