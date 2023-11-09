import ParallaxText from '@/components/animations/banner';
import Image from 'next/image';
import HeroImage from '@/public/images/hero.webp';
import MaskedText from '@/components/animations/maskedText';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  return (
    <motion.section className="w-full relative overflow-hidden min-h-screen p-2 mx-auto  ">
      <div className=" pt-[8rem]">
        <MaskedText>
          <p className="text-lg ">Hi there 👋🏾!</p>
          <h4 className="text-4xl font-bold tracking-wide">Judah Sullivan</h4>
        </MaskedText>
        <MaskedText>
          <ParallaxText baseVelocity={-5}> FrontEnd Engineer - </ParallaxText>
        </MaskedText>
        <MaskedText>
          <ParallaxText baseVelocity={-5}> UX-UI Developer - </ParallaxText>
        </MaskedText>
        <div className="pt-5">
          <MaskedText>
            <p>
              Passionate <span>developer</span> ,with a skill for building <span>beautiful</span>{' '}
              and <span>interactive</span> websites!
            </p>
          </MaskedText>
          <div className=" max-w-lg h-  flex flex-col">
            <div className="flex gap-2 ">
              <MaskedText>
                <p className=" underline underline-offset-4">Like to Discuss More?</p>
              </MaskedText>
            </div>
            <div className="pt-1">
              <motion.button
                initial={{
                  width: 0
                }}
                animate={{
                  width: '192px'
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5
                }}
                className="  h-12 w-48 overflow-hidden rounded-sm bg-theme-accent text-lg text-white "
              >
                <motion.p
                  initial={{
                    y: 100
                  }}
                  animate={{
                    y: 0
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                    stagger: 0.3,
                    ease: [0.33, 1, 0.68, 1]
                  }}
                  className="overflow-hidden"
                >
                  Get In Touch
                </motion.p>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="absolute right-0  md:top-60 w-[250px] lg:w-[300px]">
          <Image
            width={400}
            height={400}
            className="object-cover"
            src={HeroImage}
            alt="Ai Image of me"
          />
        </div>
      </div>
    </motion.section>
  );
}
