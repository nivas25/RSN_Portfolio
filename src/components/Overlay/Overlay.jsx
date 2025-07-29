// src/components/Overlay/Overlay.jsx
import React from "react";
import styles from "./Overlay.module.css";

const Overlay = () => {
  return (
    // The main container that will fade out to complete the effect
    <div className={styles.overlay}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="text-mask">
            <rect width="100%" height="100%" fill="white" />
            {/* The text group that we will scale MODERATELY */}
            <g className={styles.textGroup}>
              <text
                x="50"
                y="50"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fill="black"
              >
                RSN
              </text>
            </g>
          </mask>
        </defs>
        {/*
          This rect will be styled via its CSS class, allowing for theme changes.
          
        */}
        <rect
          width="100%"
          height="100%"
          className={styles.backgroundRect}
          mask="url(#text-mask)"
        />
      </svg>
    </div>
  );
};

export default Overlay;
