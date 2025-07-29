// src/config/logo-variants.js

// Controls logo spin and transition smoothness (60Hz-like fluidity)
export const logoTransition = {
  duration: 1.4, // slightly slower overall for smoother motion
  ease: [0.33, 1, 0.68, 1], // easeOutExpo-style

  // Custom easing for spin animation (non-linear, natural)
  rotate: {
    duration: 1.4,
    ease: [0.33, 1, 0.68, 1],
  },
};

// Logo animation states for different UI positions
export const logoStateVariants = {
  hub: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  header: {
    rotate: 360,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

// Soft cinematic page entrance/exit transitions
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 22,
      mass: 0.5,
      delay: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.25,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
