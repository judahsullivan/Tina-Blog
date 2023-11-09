import { ReactNode } from 'react';
import {motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export default function MaskedText({ children }: { children: ReactNode }) {
  const animation = {
    initial: { y: '100%' },
    enter: (i: number) => ({
      y: '0',
      transition: { stagger: 0.3, duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i }
    })
  };

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className="overflow-hidden">
      <motion.div className="m-0" variants={animation} initial="initial" animate={inView ? 'enter' : ''}>
       {children} 
      </motion.div>
    </div>
  );
}
