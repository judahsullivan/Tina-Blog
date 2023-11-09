import React from 'react';
import ToggleButton from '../toggleButton';
import { motion, useCycle } from 'framer-motion';
import Menu from '../menu';

export default function Nav(props: {}) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className="w-full h-10 ">
      <div className="flex h-full relative  px-5 items-center justify-between ">
        <p className="text-sm">
          Coded by <span>Judah Sullivan</span>
        </p>

        <motion.nav initial={false} animate={isOpen ? 'open' : 'closed'}>
          <Menu />
          <ToggleButton toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </header>
  );
}
