import ParallaxText from '@/components/animations/banner';
import MaskedText from '@/components/animations/maskedText';
import {  motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section className="w-full relative overflow-hidden min-h-screen p-2 mx-auto  ">
      <div className=" pt-[6rem] flex-col flex gap-5">
        <MaskedText>
          <p className="text-2xl ">Hi there 👋🏾!</p>
          <h4 className="text-6xl font-bold tracking-wide">Judah Sullivan</h4>
        </MaskedText>
        <MaskedText>
          <ParallaxText baseVelocity={-5}> FrontEnd Engineer - </ParallaxText>
        </MaskedText>
        <MaskedText>
          <ParallaxText baseVelocity={-5}> UX-UI Developer - </ParallaxText>
        </MaskedText>
        <div className="">
          <MaskedText>
            <p className="text-xl leading-relaxed tracking-wide">
              Passionate <span>developer</span>, with a skill for building <span>beautiful</span>{' '}
              and <span>interactive</span> websites!
            </p>
          </MaskedText>
          <div className=" max-w-lg mt-10 gap-2 flex flex-col">
              <MaskedText>
                <p className=" underline underline-offset-4">Like to Discuss More?</p>
              </MaskedText>
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
      </div>
    </motion.section>
  );
}
