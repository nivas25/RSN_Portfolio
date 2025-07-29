import React from "react";
import { motion } from "framer-motion";
import {
  pageTransition,
  logoStateVariants,
} from "../../config/logo-variants.js";
import InteractiveLogo from "../InteractiveLogo/InteractiveLogo.jsx";
import { useTheme } from "../../context/ThemeContext.jsx";
import styles from "./Hub.module.css";

const Hub = ({ onNavigate }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.hubContainer}
    >
      {/* Background Name */}
      <h1 className={styles.backgroundName}>
        <span
          className={
            theme === "dark" ? styles.threeDTextGold : styles.threeDText
          }
        >
          Reddy
        </span>
      </h1>

      {/* Master vertical layout stack */}
      <div className={styles.masterStack}>
        {/* Navigation instruction */}
        <motion.p
          className={styles.navigationHint}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: [0.19, 1, 0.22, 1],
          }}
        >
          Use the Logo to Navigate
        </motion.p>

        {/* Central identity block */}
        <div className={styles.centerContent}>
          <h2 className={`${styles.namePart} ${styles.nameTop}`}>SAI</h2>

          <motion.div
            className={styles.logoPlaceholder}
            layoutId="rsn-logo"
            variants={logoStateVariants}
          >
            <InteractiveLogo isHub={true} onNavigate={onNavigate} />
          </motion.div>

          <h2 className={`${styles.namePart} ${styles.nameBottom}`}>NIVAS</h2>
        </div>

        {/* Tagline */}
        <p className={styles.tagline}>A Portfolio Website</p>
      </div>
    </motion.div>
  );
};

export default Hub;
