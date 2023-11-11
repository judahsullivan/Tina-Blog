import Footer from '@/components/navigation/footer';
import Nav from '@/components/navigation/nav';
import { useRef, Fragment, ReactNode } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function AppLayout({ children }: { children: ReactNode }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })
      const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <Fragment>
      <Nav />
      <div ref={container}  className="relative p-5">

      {children}
       <div>

        </div> 
      </div>
      <Footer />
    </Fragment>
  );
}
