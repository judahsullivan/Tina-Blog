import Image from 'next/image';
import { FooterProps, footerData } from './footer';
import HeroImage from '@/public/images/hero.webp';

export default function Footer({externalLinks}: FooterProps) {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex justify-between w-full flex-col-reverse md:flex-row gap-10 items-center md:items-start">
          <div className="grid grid-cols-2 gap-8 w-full text-center md:text-left">
            {Object.values(footerData).map((section) => (
              <div key={section.sectionName}>
                <h2 className="mb-6 font-grotesque font-semibold text-theme-accent uppercase  text-xl underline underline-offset-2">
                  {section.sectionName}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link) => (
                    <li key={link.name} className="mb-4">
                      <a href={link.url} className="text-md hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-center gap-5">
            <h2 className="text-2xl text-theme-accent font-bold"> Newsletter coming soon!</h2>
            <div className="mt-6 flex gap-2 max-w-md ">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                placeholder="Email Address"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-theme-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <a
              href="https://flowbite.com/"
              className="flex items-center bg-theme-inverted relative  w-[170px] h-[170px] overflow-hidden rounded-full"
            >
              <Image
                src={HeroImage}
                className=" object-contain w-[200px] h-[200px] absolute top-2 left-8 "
                alt="FlowBite Logo"
              />
            </a>
          </div>

          {/* Your dynamic link sections */}
                 </div>

        {/* Your remaining content */}
        <hr className="my-6 border-theme-base sm:mx-auto lg:my-8" />

        <div className="flex flex-col md:flex-row items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <span className="text-theme-accent">Judah Sullivan™</span>. All Rights
            Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {/* {externalLinks.links.map((link) => ( */}
            {/* <Icon name={link.icon}/> */}
            {/* ))} */}
          </div>
        </div>
      </div>
    </footer>
  );
}