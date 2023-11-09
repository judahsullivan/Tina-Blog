import React from 'react';
import ToggleButton from '../toggleButton';
import { motion, useCycle } from 'framer-motion';
import Menu from '../menu';

export default function Nav(props: {}) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="absolute top-0 z-20">
          <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <Menu />
        <ToggleButton toggle={() => toggleOpen()} />
      </motion.nav>
    </header>
  );
}
