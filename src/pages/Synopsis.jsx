// src/pages/Synopsis.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header/Header.jsx";
import StickerShowcase from "../components/StickerShowcase/StickerShowcase.jsx";
import InfoCard from "../components/InfoCard/InfoCard.jsx";
import InfoGrid from "../components/InfoGrid/InfoGrid.jsx";
import { pageTransition } from "../config/logo-variants.js";
import styles from "./Synopsis.module.css";
import {
  experienceData,
  educationData,
  nameParts,
  containerVariants,
  suffixVariants,
} from "../data/synopsisData.js";

export default function Synopsis({ onNavigate }) {
  const [isAnimated, setIsAnimated] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <motion.div
      className={styles.pageContainer}
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Header Section */}
      <div
        className={styles.headerArea}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Header onNavigate={onNavigate} />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={styles.heroS}>S</span>YNOPSIS
          </h1>
          <p className={styles.subtitle}>About Me</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={styles.contentArea}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Top Content: Sticker and Name/Bio */}
        <div className={styles.topContentContainer}>
          <div className={styles.stickerBlock}>
            <StickerShowcase />
          </div>

          <div className={styles.mainInfoBlock}>
            {/* Animated Name */}
            <div className={styles.nameAnimationWrapper}>
              <div className={styles.nameBlock}>
                <motion.p
                  className={styles.imPrefix}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  I’m
                </motion.p>

                <motion.div
                  className={styles.nameInline}
                  variants={containerVariants}
                  initial="hidden"
                  animate={isAnimated ? "visible" : "hidden"}
                >
                  <AnimatePresence>
                    {nameParts.map((part) => (
                      <div key={part.letter} className={styles.nameGroup}>
                        <span
                          className={`${styles[`hero${part.letter}`]} ${
                            styles.initial
                          }`}
                        >
                          {part.letter}
                        </span>
                        <motion.span
                          className={styles.suffix}
                          variants={suffixVariants}
                        >
                          {part.suffix}
                        </motion.span>
                      </div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>

            {/* Bio Text */}
            <p className={styles.bioText}>
              Passionate about AI, ML, and frontend development, I love
              exploring new tech and pushing my limits. Always eager to learn,
              take risks, and give my best in everything I do.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className={styles.educationBlock}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.cardContainer}>
            {educationData.map((item, index) => (
              <InfoCard key={index} {...item} cardType="education" />
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className={styles.experienceBlock}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.cardContainer}>
            {experienceData.map((item, index) => (
              <InfoCard key={index} {...item} cardType="experience" />
            ))}
          </div>
        </div>

        {/* Bottom Info Grid */}
        <div className={styles.bottomGridWrapper}>
          <InfoGrid />
        </div>
      </div>
    </motion.div>
  );
}
