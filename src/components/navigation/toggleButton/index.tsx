import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  toggle: MouseEventHandler;
}

export default function ToggleButton({ toggle }: ButtonProps) {
  return (
    <button
      className="w-14 h-14 z-10 right-3 top-3 fixed flex border-theme-accent border-[2px] gap-y-1.5 flex-col items-center justify-center bg-theme-base rounded-full"
      onClick={toggle}
    >
      <motion.span
        variants={{
          open: {
            rotate: -45,
            y: 4
          },
          closed: {}
        }}
        className="w-7  border border-theme-base rounded-lg "
      />
      <motion.span
        variants={{
          open: {
            rotate: 45,
            y: -4
          },
          closed: {}
        }}
        className="w-7  border border-theme-base rounded-lg "
      />
    </button>
  );
}
