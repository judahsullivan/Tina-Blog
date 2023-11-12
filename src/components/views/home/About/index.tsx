import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from '@/components/animations/about';

export default function AboutSection() {
  const phrase =
    'Enhancing brand presence through front-end expertise and leadership. Collaboratively shaping innovative digital experiences, setting a fresh standard.';
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
          The combination of my passion for pixel <span>perfect design</span> ,{' '}
          <span> clean code</span> & <span>user interaction</span> gives me the skillset to set a
          new height <span>web design world</span>.
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
