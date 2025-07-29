import React, { useState } from "react";
import styles from "./SkeuomorphicToggle.module.css";

const SkeuomorphicToggle = ({ onToggle, initialState = false }) => {
  const [isToggled, setIsToggled] = useState(initialState);

  // Toggle handler: update state and trigger callback if provided
  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div
      className={`${styles.toggleContainer} ${isToggled ? styles.toggled : ""}`}
      onClick={handleToggle}
      role="switch"
      aria-checked={isToggled}
      tabIndex="0"
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle()}
    >
      {/* Circular handle inside the toggle */}
      <div className={styles.toggleHandle}></div>
    </div>
  );
};

export default SkeuomorphicToggle;
