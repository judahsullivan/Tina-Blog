import { motion } from 'framer-motion';
import Link from 'next/link';
import { menuData } from '../footer/footer';
import { linkVariants, menuVariants, ulVariants } from '@/components/animations/nav';

export default function Menu() {
  return (
    <motion.div
      variants={menuVariants}
      className="w-full flex-col min-h-screen md:shadow-2xl items-center jsustify-center flex fixed bg-theme-base top-0 right-0 bottom-0 overflow-hidden  z-10 "
    >
      {menuData.map((footer, index) => (
        <div
          key={index}
          className=" w-full flex-col flex items-center justify-between min-h-screen"
        >
          <div className="  mx-auto w-full  p-4 py-6 lg:py-8">
            <h1 className="px-2  w-full mt-10 text-4xl font-basement ">Navigation</h1>
            <hr className="my-2 mx-auto border-theme-base lg:my-4" />
          </div>
          <div className="w-full h-full ">
            {footer.pageLinks && (
              <motion.div
                className="font-basement text-5xl  flex-col flex justify-between h-full w-full  px-4  text-left"
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
            <hr className="my-2 border-theme-base sm:mx-auto lg:my-4" />
            <div className="flex mt-2 items-center py-2  space-x-5 justify-center ">
              {footer.externalLinks?.links?.map((link, index) => (
                <Link href={link?.url} key={index} target="_blank">
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
