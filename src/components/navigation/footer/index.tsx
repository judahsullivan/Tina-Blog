import Image from 'next/image';
import { menuData } from './footer';
import HeroImage from '@/public/images/hero.webp';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.footer
      style={{ y }}
      ref={container}
      className="z-0 bg-theme-muted flex flex-col relative p-4 py-6 text-theme-base "
    >
      {menuData.map((footer, index) => (
        <div key={index} className="flex flex-col justify-around min-h-screen w-full ">
          <div>
            <h1 className="px-2 text-3xl w-full mt-10 text-theme-inverted font-basement ">
              Get In Touch
            </h1>
          </div>
          <div className="flex justify-center h-full w-full flex-col-reverse md:flex-row-reverse gap-5 items-center ">
            <div className="grid grid-cols-2 gap-5 w-full text-center md:text-left">
              {footer.pageLinks && (
                <div key={footer.pageLinks.sectionName}>
                  <h2 className="mb-6 font-grotesque font-semibold text-theme-accent uppercase  text-2xl underline underline-offset-2">
                    {footer.pageLinks.sectionName}
                  </h2>
                  <ul className="text-theme-muted-inverted">
                    {footer.pageLinks.links?.map((link, index) => (
                      <li key={index} className="mb-4 font-basement">
                        <Link
                          passHref
                          href={link?.url}
                          className="hover:text-theme-accent transition-colors duration-100 ease-linear  text-md hover:underline"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {footer.externalLinks && (
                <div key={footer.externalLinks.sectionName}>
                  <h2 className="mb-6 font-grotesque font-semibold text-theme-accent uppercase  text-2xl underline underline-offset-2">
                    {footer.externalLinks.sectionName}
                  </h2>
                  <ul className="text-theme-muted-inverted">
                    {footer.externalLinks.links?.map((link, index) => (
                      <li key={index} className="mb-4">
                        <Link
                          target="_blank"
                          href={link?.url}
                          className="text-md font-basement hover:text-theme-accent transition-colors duration-100 ease-linear  hover:underline"
                        >
                          {link?.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex gap-5 w-full justify-between flex-col items-center ">
              <Link
                href="/"
                className="flex items-center bg-theme-inverted relative  w-[170px] h-[170px] overflow-hidden rounded-full"
              >
                <Image
                  src={HeroImage}
                  className=" object-contain w-[200px] h-[200px] absolute top-2 left-8 "
                  alt="Image of me created in MidJourney"
                  priority
                />
              </Link>
              <h2 className="text-2xl text-theme-accent font-bold"> Newsletter coming soon!</h2>
              <div className="mt-2 flex gap-2 max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-300 cursor-not-allowed px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  temporarily disabled
                </button>
              </div>
            </div>
          </div>

          {/* Your remaining content */}
          <div className=" text-theme-muted-inverted">
            <hr className=" my-2 border-theme-muted border sm:mx-auto lg:my-4" />

            <div className="flex w-full flex-col md:flex-row items-center sm:justify-between">
              <span className="text-sm   sm:text-center ">
                © 2023 <span className="text-theme-accent">Judah Sullivan™</span>. All Rights
                Reserved.
              </span>
              <div className="flex mt-2  space-x-5 sm:justify-center">
                {footer.externalLinks?.links?.map((link, index) => (
                  <Link href={link?.url} key={index} target="_blank">
                    {link?.icon && link.icon({ size: 20 })}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.footer>
  );
}
