import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InfoCard.module.css";

// Animation for expanding and collapsing content
const detailsVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    y: 10,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  expanded: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// SVG Icon for Google Maps link
const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// SVG Icon for website link
const LinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
  </svg>
);

const InfoCard = ({
  title,
  subtitle,
  date,
  description,
  detailImageUrl,
  achievements = [],
  googleMapsUrl,
  websiteUrl,
  cardType,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
      className={`${styles.card} ${isExpanded ? styles.expanded : ""}`}
      data-card-type={cardType}
      onClick={toggleExpand}
      layout
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    >
      {/* Background Glow and Border */}
      <div className={styles.glow} id={styles.glow1}></div>
      <div className={styles.glow} id={styles.glow2}></div>
      <div className={styles.border}></div>

      <div className={styles.cardContent}>
        {/* Header Section: Subtitle, Title, Map Link */}
        <div className={styles.compactHeader}>
          <div className={styles.mainContent}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.title}>{title}</p>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapsLink}
            onClick={(e) => e.stopPropagation()}
          >
            <MapPinIcon />
          </a>
        </div>

        {/* Compact Info: Description & Date */}
        <div className={styles.compactDetails}>
          <p className={styles.description}>{description}</p>
          <p className={styles.date}>{date}</p>
        </div>

        {/* Expanded Content Block */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className={styles.expandedContent}
              variants={detailsVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
            >
              {/* Optional Detail Image */}
              <motion.img
                src={detailImageUrl}
                alt={`${subtitle} detail`}
                className={styles.detailImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Achievements List */}
              {achievements.length > 0 && (
                <ul className={styles.achievementsList}>
                  {achievements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Website Link */}
              <div
                className={styles.websiteLinkContainer}
                onClick={(e) => e.stopPropagation()}
              >
                <a
                  href={websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.websiteLinkText}
                >
                  Visit Website <LinkIcon />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Click Hint (for collapsed state) */}
        {!isExpanded && (
          <div className={styles.clickHint}>Click to see more</div>
        )}
      </div>
    </motion.div>
  );
};

export default InfoCard;
