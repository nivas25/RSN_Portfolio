import React from "react";
import { motion } from "framer-motion";
import LogoVectors from "./LogoVectors";
import styles from "./LogoStyles.module.css";

// InteractiveLogo renders a clickable SVG logo that optionally rotates.
// Props:
// - isHub: if true, logo is static and unclickable
// - onNavigate: function to handle inner element navigation
// - onGoBack: function triggered when clicking the logo (if not isHub)

const InteractiveLogo = ({ isHub, onNavigate, onGoBack }) => {
  const handleClick = () => {
    if (!isHub && onGoBack) onGoBack();
  };

  return (
    <div
      className={styles.logoWrapper}
      onClick={handleClick}
      style={{ cursor: isHub ? "default" : "pointer" }}
    >
      <svg
        className={styles.logoSvg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 251.01 256"
      >
        {/* Rotating logo animation only when not on hub page */}
        <motion.g
          initial={{ rotate: 0 }}
          animate={{ rotate: isHub ? 0 : 360 }}
          transition={{
            delay: isHub ? 0.35 : 0,
            duration: 1.2,
            ease: "linear",
          }}
          style={{
            transformOrigin: "50% 50%",
            pointerEvents: "visiblePainted",
          }}
        >
          <LogoVectors onNavigate={onNavigate} isHub={isHub} />
        </motion.g>
      </svg>
    </div>
  );
};

export default InteractiveLogo;
