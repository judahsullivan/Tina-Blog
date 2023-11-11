import ParallaxText from '@/components/animations/banner';
import MaskedText from '@/components/animations/maskedText';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section className="pt-24 flex-col flex justify-center h-full gap-10 w-full relative overflow-hidden min-h-screen  mx-auto  ">
        <MaskedText>
          <h4 className=" text-3xl font-grotesque">Judah Sullivan</h4>
        </MaskedText>
        <MaskedText>
          <ParallaxText baseVelocity={-5}> FrontEnd Engineer - UX-UI Developer - </ParallaxText>
        </MaskedText>
        <div className="">
          <MaskedText>
            <p className="text-lg leading-relaxed text-theme-muted tracking-wide">
              A passionate <span>developer</span>, with a skill for building <span>beautiful</span>{' '}
              and <span>interactive</span> websites!
            </p>
          </MaskedText>
          <div className=" max-w-lg mt-10 gap-2 flex flex-col">
            <MaskedText>
              <p className=" text-theme-based underline underline-offset-4">
                Like to Discuss More?
              </p>
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
                className="hover:bg-theme-accent-muted hover:text-theme-muted  h-12 w-48 overflow-hidden rounded-sm bg-theme-accent text-lg text-white "
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
                  className="font-grotesque tracking-widest overflow-hidden"
                >
                  Get In Touch
                </motion.p>
              </motion.button>
            </div>
          </div>
        </div>
    </motion.section>
  );
}
