import React from "react";
import { motion } from "framer-motion";
import {
  FiX,
  FiGithub,
  FiExternalLink,
  FiAward,
  FiZap,
  FiCode,
  FiUsers,
} from "react-icons/fi";
import styles from "./ProjectDetail.module.css";

// The modal that shows detailed project information
const ProjectDetail = ({ project, onClose }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Prevent closing modal when clicking inside content */}
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        variants={{
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close button */}
        <motion.button className={styles.closeButton} onClick={onClose}>
          <FiX size={24} />
        </motion.button>

        {/* Main content section */}
        <div className={styles.modalContent}>
          {/* Project title with animation layout ID */}
          <motion.h1
            className={styles.projectTitle}
            layoutId={`card-title-${project.id}`}
          >
            {project.title}
          </motion.h1>

          {/* Full project description */}
          <p className={styles.longDescription}>{project.longDescription}</p>

          {/* Links to GitHub and live site */}
          <div className={styles.links}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <FiGithub /> View Code
            </a>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.liveButton}`}
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>

          <hr className={styles.divider} />

          {/* Detailed project info */}
          <div className={styles.infoGrid}>
            {/* Role section */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FiUsers /> My Role
              </h3>
              <p>{project.myRole}</p>
            </div>

            {/* Tech stack used */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FiCode /> Tech Stack
              </h3>
              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key features */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FiZap /> Key Features
              </h3>
              <ul>
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Challenges faced */}
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                <FiAward /> Challenges
              </h3>
              <p>{project.challenges}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
