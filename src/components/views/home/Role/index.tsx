import { stylesWithCssVar } from '@/utils/motion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedRole = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end']
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ['100%', '-100%']);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.7]);

  const opacityBorder = useTransform(scrollYProgress, [0.7, 0.71, 0.72], [1, 1, 0]);
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={stylesWithCssVar({
        opacity: opacitySection,
        '--scale': scale,
        '--opacity-border': opacityBorder
      })}
      ref={targetRef}
      className=""
    >
      <div className=" h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#CEF144] before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX }}
          className="whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-6xl text-heading"
        >
          Creating a new Experience.
        </motion.p>
      </div>
    </motion.section>
  );
};
