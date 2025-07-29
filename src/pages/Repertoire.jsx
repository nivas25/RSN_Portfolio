// Imports
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Header from "../components/Header/Header.jsx";
import SkeuomorphicToggle from "../components/SkeuomorphicToggle/SkeuomorphicToggle.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail.jsx";

import { pageTransition } from "../config/logo-variants.js";
import { projectData } from "../data/repertoireData.js";
import styles from "./Repertoire.module.css";

const Repertoire = ({ onNavigate }) => {
  // State to manage selected category (AI/ML or Web Dev)
  const [activeCategory, setActiveCategory] = useState("AI & Machine Learning");

  // State for currently selected project (for modal)
  const [selectedProject, setSelectedProject] = useState(null);

  // State for highlighted project (for desktop view)
  const [activeProject, setActiveProject] = useState(null);

  // Preload all project images on first load
  useEffect(() => {
    projectData.forEach((project) => {
      if (Array.isArray(project.imageUrl)) {
        project.imageUrl.forEach((url) => {
          const img = new Image();
          img.src = url;
        });
      }
    });
  }, []);

  // Handle toggle switch between categories
  const handleFilterToggle = (isToggled) => {
    const newCategory = isToggled ? "AI & Machine Learning" : "Web Development";
    setActiveCategory(newCategory);
  };

  // Filter projects based on active category
  const filteredProjects = useMemo(
    () => projectData.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  // Update active project when the category or filter changes
  useEffect(() => {
    setActiveProject(filteredProjects[0]);
  }, [filteredProjects]);

  return (
    <>
      <motion.div
        className={styles.pageContainer}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Header section with title and subtitle */}
        <div className={styles.headerArea}>
          <Header onNavigate={onNavigate} />
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.heroR}>R</span>EPERTOIRE
            </h1>
            <p className={styles.subtitle}>A Showcase of My Work</p>
          </div>
        </div>

        {/* Main section with toggle, tab list, and cards */}
        <main className={styles.repertoireContent}>
          {/* Toggle switch and labels */}
          <div className={styles.controlsContainer}>
            <div className={styles.toggleWrapper}>
              <span
                className={`${styles.toggleLabel} ${
                  activeCategory === "Web Development"
                    ? styles.activeLabelWebDev
                    : ""
                }`}
              >
                Web Dev
              </span>
              <SkeuomorphicToggle
                onToggle={handleFilterToggle}
                initialState={activeCategory === "AI & Machine Learning"}
              />
              <span
                className={`${styles.toggleLabel} ${
                  activeCategory === "AI & Machine Learning"
                    ? styles.activeLabelAiMl
                    : ""
                }`}
              >
                AI/ML
              </span>
            </div>
          </div>

          {/* Desktop view — tabbed sidebar and single project display */}
          <div className={styles.desktopShowcase}>
            <div className={styles.tabBarContainer}>
              <div className={styles.projectList}>
                {filteredProjects.map((project) => {
                  const isActive = activeProject?.id === project.id;
                  const activeColorClass = isActive
                    ? project.category === "Web Development"
                      ? styles.webDevActive
                      : styles.aiMlActive
                    : "";

                  return (
                    <div
                      key={project.id}
                      className={`${styles.rosterItem} ${
                        isActive ? styles.activeRosterItem : ""
                      } ${activeColorClass}`}
                      onClick={() => setActiveProject(project)}
                    >
                      {isActive && (
                        <motion.div
                          className={styles.activeTabPill}
                          layoutId="activePill"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className={styles.rosterTitle}>
                        {project.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main display for selected project (desktop) */}
            <div className={styles.cardDisplay}>
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <ProjectCard
                      project={activeProject}
                      onClick={() => setSelectedProject(activeProject)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile view — list of all filtered projects */}
          <div className={styles.mobileShowcase}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </main>
      </motion.div>

      {/* Modal for detailed project view */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Repertoire;
