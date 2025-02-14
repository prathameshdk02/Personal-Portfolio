// Animations for Framer Motion Elements

// FadeIn Animations
export const fadeIn = {
  initial: {
    opacity: 0,
    y: -24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 24,
  },
};

export const fadeUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

export const pulsate = {
  animate: {
    opacity: [1, 0, 1],
  },
  transition: {
    duration: 1.5,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const verticalBob = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: [0, -10, 0],
  },
  transition: {
    opacity: { duration: 1 },
    y: {
      ease: "easeInOut",
      repeat: Infinity,
      duration: 1.5,
    },
  },
};

export const popupSpring = {
  initial: {
    opacity: 0,
    scale: 0.7,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.5,
  },
  transition: {
    type: "spring",
    stiffness: 50,
    damping: 10,
  },
};
