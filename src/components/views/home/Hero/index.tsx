import ParallaxText from '@/components/animations/banner';
import MaskedText from '@/components/animations/maskedText';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {


  return (
    <motion.section
      className="w-full overflow-hidden min-h-screen p-2 mx-auto flex-col flex justify-center "
    >
      <div className="">
        <motion.div
        >
          <MaskedText>
            <p className="text-lg ">Hi there 👋🏾!</p>
            <h4 className="text-4xl font-bold tracking-wide">Judah Sullivan</h4>
          </MaskedText>
          <motion.div
            aria-label="Front-end Developer and Ui Ux developer Parallax Banner"
          >
            <MaskedText>
              <ParallaxText baseVelocity={-5}> - FrontEnd Developer - UIUX Developer {" "}</ParallaxText>
            </MaskedText>
            <motion.div
              className="">
              <MaskedText>
                <p>
                  Passionate <span>developer</span> , will a skill for building <span>beautiful</span> and{' '}
                  <span>interactive</span> websites!
                </p>

              </MaskedText>
            </motion.div>
          </motion.div>
          {/* <Banner /> */}
        </motion.div>
      </div>
    </motion.section>
  );
}
