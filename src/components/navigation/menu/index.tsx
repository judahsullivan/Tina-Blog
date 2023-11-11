import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuData } from '../footer/footer';
import { linkVariants, menuVariants, ulVariants } from '@/components/animations/nav';
import ThemeToggle from '@/components/settings/ThemeToggle';

export default function Menu() {
  return (
    <motion.div
      variants={menuVariants}
      className="bg-theme-muted w-full md:w-[450px] flex-col min-h-screen md:shadow-2xl items-center justify-center flex fixed top-0 right-0 bottom-0 overflow-hidden  z-10 "
    >
      {menuData.map((footer, index) => (
        <div key={index} className=" w-full flex-col flex items-center justify-between h-full">
          <ThemeToggle />
          <div className=" w-full ">
            <h1 className="px-2  w-full mt-10 text-4xl font-basement text-center ">Navigation</h1>
            <hr className="my-2 max-w-sscreen mx-auto border-theme-muted lg:my-4" />
          </div>
          <div className="w-full h-full ">
            {footer.pageLinks && (
              <motion.div
                className="font-basement text-5xl text-theme-inverted  flex-col flex justify-evenly h-full w-full  px-4  text-left"
                variants={ulVariants}
                key={footer.pageLinks.sectionName}
              >
                {footer.pageLinks.links?.map((link, index) => (
                  <ul key={index} className="md:ml-10 overflow-hidden">
                    <motion.li variants={linkVariants}>
                      <Link
                        passHref
                        href={link?.url}
                        className="hover:text-theme-accent transition-colors duration-100 ease-linear "
                      >
                        {link?.name}
                      </Link>
                    </motion.li>
                  </ul>
                ))}
              </motion.div>
            )}
          </div>
          <div className=" text-center mx-auto w-full  p-4 py-6 ">
            <hr className="my-2 border-theme-muted sm:mx-auto lg:my-4" />
            <div className="flex mt-2 items-center py-2  space-x-5 justify-center ">
              {footer.externalLinks?.links?.map((link, index) => (
                <Link
                  href={link?.url}
                  key={index}
                  target="_blank"
                  className="text-theme-muted-inverted"
                >
                  {link?.icon && link.icon({ size: 20 })}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
