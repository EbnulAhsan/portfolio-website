// Framer Motion animation presets and utilities
export const animations = {
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  // Scale animations
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },

  // Slide animations
  slideInLeft: {
    initial: { x: -100 },
    animate: { x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },

  slideInRight: {
    initial: { x: 100 },
    animate: { x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },

  // Container animations for stagger children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  },

  // Hover effects
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  },

  hoverLift: {
    whileHover: { y: -8 },
    transition: { duration: 0.3 },
  },

  // Button ripple effect
  buttonRipple: {
    initial: { scale: 0, opacity: 1 },
    animate: { scale: 4, opacity: 0 },
    transition: { duration: 0.6 },
  },

  // Page transition
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  },
}

// Viewport settings for scroll animations
export const viewportSettings = {
  once: true,
  amount: 0.2,
}

// Easing functions
export const easing = {
  easeOut: [0.34, 1.56, 0.64, 1],
  easeInOut: [0.43, 0.13, 0.15, 0.96],
  anticipate: [0.68, -0.55, 0.265, 1.55],
}
