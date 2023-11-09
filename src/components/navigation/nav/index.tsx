import React from 'react';
import ToggleButton from '../toggleButton';
import { motion, useCycle } from 'framer-motion';
import Menu from '../menu';

export default function Nav(props: {}) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="absolute top-0 z-20">
      <p className="text-sm px-2">
        Coded by <span className="uppercase">Judah Sullivan</span>
      </p>

      <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
        <Menu />
        <ToggleButton toggle={() => toggleOpen()} />
      </motion.nav>
    </header>
  );
}
