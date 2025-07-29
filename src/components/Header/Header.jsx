import React from "react";
import { motion } from "framer-motion";
import {
  logoTransition,
  logoStateVariants,
} from "../../config/logo-variants.js";
import InteractiveLogo from "../InteractiveLogo/InteractiveLogo.jsx";
import styles from "./Header.module.css";

const Header = ({ onNavigate }) => {
  return (
    <div className={styles.headerContainer}>
      <motion.div
        layoutId="rsn-logo"
        transition={logoTransition}
        variants={logoStateVariants}
        animate="header"
        style={{ width: "100%", height: "100%" }}
      >
        <InteractiveLogo isHub={false} onGoBack={() => onNavigate("/")} />
      </motion.div>
    </div>
  );
};

export default Header;
