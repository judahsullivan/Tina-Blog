export const menuVariants = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 45px) 45px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      ease: [0.65, 0, 0.35, 1]
    }
  }),
  closed: {
    clipPath: 'circle(20px at calc(100% - 45px) 45px)',
    transition: {
      delay: 0.5,
      duratio: 1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
      ease: [0.65, 0, 0.35, 1]
    }
  }
};

export const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const linkVariants = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};
