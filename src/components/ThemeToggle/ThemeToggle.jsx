import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import styles from "./ThemeToggle.module.css";

// Sun icon (shown in light mode)
const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.iconSvg}
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon (shown in dark mode)
const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={styles.iconSvg}
    fill="currentColor"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Main toggle component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.toggleContainer} onClick={toggleTheme}>
      <motion.div
        className={styles.cube}
        animate={theme === "light" ? "light" : "dark"}
        variants={{
          light: { rotateY: 0, rotateX: 0 },
          dark: { rotateY: -180, rotateX: -90 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
      >
        <div className={`${styles.cubeFace} ${styles.front}`}>
          <SunIcon />
        </div>
        <div className={`${styles.cubeFace} ${styles.top}`}>
          <MoonIcon />
        </div>
        <div className={`${styles.cubeFace} ${styles.back}`} />
        <div className={`${styles.cubeFace} ${styles.right}`} />
        <div className={`${styles.cubeFace} ${styles.left}`} />
        <div className={`${styles.cubeFace} ${styles.bottom}`} />
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
