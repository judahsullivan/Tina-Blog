import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from '@/components/animations/about';
import RoundedButton from '@/components/animations/about/button';

export default function AboutSection() {
  const phrase =
    'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.';
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div className={'min-h-screen py-10 justify-between flex flex-col  mx-auto '}>
      <h3 className="text-3xl font-grotesque">What Makes me Different?</h3>
      <div
        ref={description}
        className={' gap-5  max-w-5xl flex justify-between mx-auto flex-col md:flex-row  '}
      >
        <p className=" m-0 [&>*:nth-child(1)]:space-x-2 leading-[1.3] ">
          {phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className={'relative overflow-hidden mx-w-sm text-4xl inline-flex'}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  className={'mr-1.5 normal-case text-theme-muted'}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p className="" variants={opacity} animate={isInView ? 'open' : 'closed'}>
          The combination of my passion for pixel perfect <span>design</span> , <span>code</span> &{' '}
          <span>interaction</span> positions me in a unique place in the{' '}
          <span>web design world</span>.
        </motion.p>
      </div>
      <div data-scroll data-scroll-speed={0.1}>
        <>
          <p>About me</p>
        </>
      </div>
    </div>
  );
}
