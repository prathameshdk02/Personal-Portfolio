// Animations for Framer Motion Elements

export const cardWhileHover = {
  scale: 1.02,
  transition: {
    duration: 0.5,
  },
};

export const staggeringParent = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.8,
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
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
    ease: 'easeInOut',
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
      ease: 'easeInOut',
      repeat: Infinity,
      duration: 1.5,
    },
  },
};
