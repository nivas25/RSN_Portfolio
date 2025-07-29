import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe, FiCpu, FiArrowRight } from "react-icons/fi";
import styles from "./ProjectCard.module.css";

// Return the appropriate icon based on project type
const getTypeIcon = (type) => {
  switch (type) {
    case "webapp":
      return <FiGlobe />;
    case "ml-model":
      return <FiCpu />;
    default:
      return null;
  }
};

// Animation states for the image transitions
const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const ProjectCard = ({ project, onClick }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const isSlideshow =
    Array.isArray(project.imageUrl) && project.imageUrl.length > 1;

  // Handle image slideshow logic (every 3 seconds)
  useEffect(() => {
    if (!isSlideshow) return;

    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % project.imageUrl.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isSlideshow, project.imageUrl]);

  // Get the current image (single or from slideshow)
  const currentImage = Array.isArray(project.imageUrl)
    ? project.imageUrl[imageIndex]
    : project.imageUrl;

  return (
    <motion.div
      className={styles.card}
      onClick={onClick}
      layoutId={`card-container-${project.id}`}
    >
      <div className={styles.glossySheen}></div>

      <div className={styles.imageContainer}>
        <div className={styles.imageOverlay}></div>

        {/* Handle image transitions */}
        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={currentImage}
            alt={project.title}
            className={styles.projectImage}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 0.5, ease: "easeInOut" } }}
            layoutId={`card-image-${project.id}`}
          />
        </AnimatePresence>

        {/* Show status badge (Completed / In Progress) */}
        {project.status && (
          <div
            className={`${styles.statusBadge} ${
              project.status === "Completed"
                ? styles.completed
                : styles.inProgress
            }`}
          >
            {project.status}
          </div>
        )}
      </div>

      <div className={styles.contentContainer}>
        {/* Project title and type icon */}
        <div className={styles.titleWrapper}>
          <span className={styles.typeIcon}>{getTypeIcon(project.type)}</span>
          <motion.h3
            layoutId={`card-title-${project.id}`}
            className={styles.projectTitle}
          >
            {project.title}
          </motion.h3>
        </div>

        {/* Project description */}
        <p className={styles.projectDescription}>{project.description}</p>

        {/* Tech stack pills (limit to 4) */}
        <div className={styles.techStack}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className={styles.techPill}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover call-to-action */}
      <div className={styles.ctaHover}>
        View Details <FiArrowRight />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
