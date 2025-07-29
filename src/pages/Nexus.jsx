import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header/Header.jsx";
import MandalaGlyph from "../components/MandalaGlyph/MandalaGlyph.jsx";
import styles from "./Nexus.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaReddit,
} from "react-icons/fa6";

// Social links and icons
const socials = [
  { name: "X", Icon: FaXTwitter, url: "https://x.com/_nivas_sai_" },
  {
    name: "Instagram",
    Icon: FaInstagram,
    url: "https://www.instagram.com/_nivas_sai__/",
  },
  {
    name: "Reddit",
    Icon: FaReddit,
    url: "https://www.reddit.com/user/nivas_sai_/",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedin,
    url: "https://www.linkedin.com/in/reddy-sai-nivas-c-a0b22b297/",
  },
  { name: "GitHub", Icon: FaGithub, url: "https://github.com/nivas25" },
];

const textOptions = ["Create", "Collaborate", "Connect"];

// ✨ HELPER HOOK to get window width
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

const Nexus = ({ onNavigate }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // ✨ ADDED: Get window width and check if it's a desktop
  const width = useWindowWidth();
  const isDesktop = width >= 900; // 900px is the desktop breakpoint from your CSS

  // Cycle through the text options
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <div className={styles.headerArea}>
        <Header onNavigate={onNavigate} />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={styles.heroN}>N</span>EXUS
          </h1>
          <p className={styles.subtitle}>Forge a Connection</p>
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Left Column - Text Content */}
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className={styles.mainHeading}>I Code. You Reach. We Create.</h2>
          <p className={styles.subHeading}>
            I’m a student and AI enthusiast crafting smart, creative digital
            solutions. From web apps to machine learning, I focus on quality and
            impact. Tap the orbiting icons to contact me, let’s connect.
          </p>
          <div className={styles.ctaContainer}>
            <p className={styles.emailDisplay}>nivassai2506@gmail.com</p>
          </div>
        </motion.div>

        {/* Right Column - Animated Glyph */}
        <div className={styles.glyphColumn}>
          <motion.div
            className={styles.glyphContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Rotating Mandala */}
            <motion.div
              className={styles.mandalaWrapper}
              // ✨ UPDATED: Animation props are now conditional based on screen size
              animate={isDesktop ? { rotate: 360 } : {}}
              transition={
                isDesktop
                  ? {
                      duration: 90,
                      ease: "linear",
                      repeat: Infinity,
                    }
                  : {}
              }
            >
              <MandalaGlyph />
            </motion.div>

            {/* Center Text */}
            <div className={styles.textCore}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={textOptions[currentTextIndex]}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className={styles.coreText}
                >
                  {textOptions[currentTextIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Social Links in Orbit */}
            <ul className={styles.socialsRing}>
              {socials.map(({ name, Icon, url }, i) => (
                <li
                  key={name}
                  className={styles.socialNode}
                  style={{ "--angle": `${(i / socials.length) * 360}deg` }}
                >
                  <motion.a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${name}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <Icon />
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Nexus;
