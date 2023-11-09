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
        <motion.div>
          <MaskedText>
            <p className="text-lg ">Hi there 👋🏾!</p>
            <h4 className="text-4xl font-bold tracking-wide">Judah Sullivan</h4>
          </MaskedText>
          <motion.div aria-label="Front-end Developer and Ui Ux developer Parallax Banner">
            <MaskedText>
              <p>
                Passionate <span>developer</span> , will a skill for building <span>beautiful</span>{' '}
                and <span>interactive</span> websites!
              </p>
            </MaskedText>
            <motion.div className="">
              <MaskedText>
                <ParallaxText baseVelocity={-5}> FrontEnd Engineer - </ParallaxText>
                <ParallaxText baseVelocity={-5}> UX-UI Developer - </ParallaxText>
              </MaskedText>
            </motion.div>
          </motion.div>
          {/* <Banner /> */}
        </motion.div>
        <div className="absolute right-0  md:top-32 w-[200px] md:w-[300px]">
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
