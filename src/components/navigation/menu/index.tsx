import { motion } from 'framer-motion';
import ThemeToggle from '@/components/settings/ThemeToggle';

const menuVariants = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at calc(100% - 45px) 45px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 45px) 45px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

export default function Menu() {
  return (
    <motion.div
      variants={menuVariants}
      className="w-full min-h-screen flex  fixed bg-theme-inverted top-0 right-0 bottom-0 overflow-hidden  z-10 "
    >
      <div>
  <h1>Menu</h1>

        <ThemeToggle />
      </div>
    
    </motion.div>
  );
}