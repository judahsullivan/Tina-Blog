import { MouseEventHandler } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  toggle: MouseEventHandler;
}

export default function ToggleButton({ toggle }: ButtonProps) {
  return (
    <button
      className="w-14 h-14 z-10 right-[17px] top-[17px] fixed flex   gap-y-1.5 flex-col items-center justify-center rounded-full"
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
        className="w-7  border border-theme-inverted rounded-lg "
      />
      <motion.span
        variants={{
          open: {
            rotate: 45,
            y: -4
          },
          closed: {}
        }}
        className="w-7  border border-theme-inverted rounded-lg "
      />
    </button>
  );
}
