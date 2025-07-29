import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./StickerShowcase.module.css";

// Sticker imports
import sticker1 from "../../assets/stickers/sticker1.png";
import sticker2 from "../../assets/stickers/sticker2.png";
import sticker3 from "../../assets/stickers/sticker3.png";
import sticker4 from "../../assets/stickers/sticker4.png";

// Add more stickers here if needed
const stickers = [sticker1, sticker2, sticker3, sticker4];

const StickerShowcase = () => {
  const [index, setIndex] = useState(0);

  // Auto-rotate stickers every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % stickers.length);
    }, 3000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.showcaseContainer}>
      {/* Static colorful frame in background */}
      <div className={styles.colorfulFrame}></div>

      {/* Animated sticker that changes every few seconds */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={stickers[index]}
          alt="Rotating personal sticker"
          className={styles.stickerImage}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: -50,
            transition: { duration: 0.2 },
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default StickerShowcase;
