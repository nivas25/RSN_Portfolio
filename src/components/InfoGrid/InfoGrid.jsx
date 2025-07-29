import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InfoGrid.module.css";

// ----------------------------
// Data for InfoGrid Sections
// ----------------------------

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "CSS", "UI/UX", "Framer Motion"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Scikit-learn", "OpenCV", "NumPy", "Pandas"],
  },
  {
    category: "Core CS & Tools",
    skills: ["Data Structures", "OOP", "DBMS", "Git"],
  },
];

const programmingLangs = ["Python", "JavaScript", "C"];

const spokenLangs = [
  { name: "English", native: "English" },
  { name: "Telugu", native: "తెలుగు" },
  { name: "Hindi", native: "हिन्दी" },
  { name: "Kannada", native: "ಕನ್ನಡ" },
  { name: "Japanese", native: "日本語" },
];

// ----------------------------
// Animated Switching Language
// ----------------------------

const KineticLanguage = ({ name, native }) => {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    if (name === "English") return;
    const intervalId = setInterval(() => setIsNative((prev) => !prev), 3500);
    return () => clearInterval(intervalId);
  }, [name]);

  return (
    <div className={styles.kineticContainer}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isNative ? native : name}
          className={styles.kineticText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {isNative ? native : name}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// ----------------------------
// Gradient Border Resume Button
// ----------------------------

const GradientBorderButton = () => {
  return (
    <a
      href="/Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.gradientButton}
    >
      <span className={styles.buttonContent}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>View Resume</span>
      </span>
    </a>
  );
};

// ----------------------------
// InfoGrid Main Component
// ----------------------------

export default function InfoGrid() {
  return (
    <div className={styles.infoGridContainer}>
      {/* Left Panel: Languages */}
      <div className={styles.infoGridPanel}>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <div className={styles.auroraPanel}>
          <div className={styles.panelSubSection}>
            <h4 className={styles.panelSubSectionTitle}>Programming</h4>
            <div className={styles.panelTagsContainer}>
              {programmingLangs.map((lang) => (
                <div key={lang} className={styles.itemTag}>
                  {lang}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.panelSubSection}>
            <h4 className={styles.panelSubSectionTitle}>Spoken</h4>
            <div className={styles.panelTagsContainer}>
              {spokenLangs.map((lang) => (
                <div key={lang.name} className={styles.itemTag}>
                  <KineticLanguage name={lang.name} native={lang.native} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Skills */}
      <div className={styles.infoGridPanel}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.auroraPanel}>
          {skillsData.map((category) => (
            <div key={category.category} className={styles.panelSubSection}>
              <h4 className={styles.panelSubSectionTitle}>
                {category.category}
              </h4>
              <div className={styles.panelTagsContainer}>
                {category.skills.map((skill) => (
                  <div key={skill} className={styles.itemTag}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.resumeButtonContainer}>
            <GradientBorderButton />
          </div>
        </div>
      </div>
    </div>
  );
}
