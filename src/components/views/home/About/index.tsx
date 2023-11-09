import { useTransform, useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Main from '@/public/images/main-screen.svg';
import Hero from '@/public/images/hero.webp';

export const About = () => {
  // const targetRef = useRef<HTMLDivElement | null>(null);
  // const extendedRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ['start end', 'end end']
  // });
  // const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
  //   target: extendedRef,
  //   offset: ['start end', 'end end']
  // });
  //
  // const scale = useTransform(scrollYProgressIncludingOverlap, [0.1, 0.4, 0.25, 1], [0.5, 1, 2, 1]);
  // const x = useTransform(
  //   scrollYProgressIncludingOverlap,
  //   [1, 0.25, 0.75, 0.9, 1],
  //   ['0vw', '20vw', '40vw', '60vw', '38vw']
  // );
  // const y = useTransform(scrollYProgressIncludingOverlap, [0, 1], ['0vh', '40vh']);
  // const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);
  //
  return (
    <section className="relative z-10 mt-[-30vh] h-[300vh]">
      <div className="mb-[-100vh] h-[220vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div
              // style={{ scale, x, y }}
              className="origin-top"
            >
              <Image
                alt=""
                // style={{ opacity }}
                src={Hero}
                height={600}
                width={400}
                className="object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
