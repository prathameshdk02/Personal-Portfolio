import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { faLeftLong, faHouse, faScrewdriverWrench, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLightbulb, faAddressCard } from '@fortawesome/free-regular-svg-icons';

import { animationDelay } from '../../../config/config';
import HomeContext from '../../../context/HomeContext';


const parentNavVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: animationDelay + 1,
    },
  },
};

const childNavVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      type: 'spring',
      stiffness: 100,
      damping: 7,
    },
  },
};

const Sidebar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { homeCtx, setHomeCtx } = useContext(HomeContext);
  const { currentSection } = homeCtx;

  const toggleMobileSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="absolute right-8 top-8 md:right-10 md:top-10 text-white">
      {/* Show Hamburger Icon Bars when the Sidebar is closed for Mobile users */}
      {isMobile && !isOpen && (
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: animationDelay + 1.5,
            type: 'spring',
            stiffness: 100,
            damping: 7,
          }}>
          <FontAwesomeIcon icon={faBarsStaggered} className="size-5" onClick={toggleMobileSidebar} />
        </motion.span>
      )}

      <AnimatePresence>
        {/* Show the expanded sidebar for mobile users */}
        {isMobile && isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="glassy-slide-down fixed w-full h-full top-0 left-1/2 rounded-b-lg transform -translate-x-1/2 p-6 z-10">
            <FontAwesomeIcon
              icon={faXmark}
              className="size-5 absolute right-6 top-6"
              onClick={toggleMobileSidebar}
            />
            <motion.h2 className="text-3xl text-primaryhead font-bold">Navigation</motion.h2>
            <motion.h2 className="text-2xl text-secondaryhead mb-4">Go To</motion.h2>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}>
              <a
                onClick={() => {
                  setIsOpen(false);
                  setHomeCtx({ currentSection: 1, doSmoothScroll: true });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faHouse}></FontAwesomeIcon>
                <span className="min-w-20">Home</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == 1 ? 'opacity-100' : ''
                  } transition-opacity duration-300 size-5`}
                  icon={faLeftLong}></FontAwesomeIcon>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}>
              <a
                onClick={() => {
                  setIsOpen(false);
                  setHomeCtx({ currentSection: 2, doSmoothScroll: true });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faUser}></FontAwesomeIcon>
                <span className="min-w-20">About</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == 2 ? 'opacity-100' : ''
                  } transition-opacity duration-300 size-5`}
                  icon={faLeftLong}></FontAwesomeIcon>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.25 }}>
              <a
                onClick={() => {
                  setIsOpen(false);
                  setHomeCtx({ currentSection: 3, doSmoothScroll: true });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faLightbulb}></FontAwesomeIcon>
                <span className="min-w-20">Experience</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == 3 ? 'opacity-100' : ''
                  } transition-opacity duration-300 size-5`}
                  icon={faLeftLong}></FontAwesomeIcon>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}>
              <a
                onClick={() => {
                  setIsOpen(false);
                  setHomeCtx({ currentSection: 4, doSmoothScroll: true });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faScrewdriverWrench}></FontAwesomeIcon>
                <span className="min-w-20">Projects</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == 4 ? 'opacity-100' : ''
                  } transition-opacity duration-300 size-5`}
                  icon={faLeftLong}></FontAwesomeIcon>
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.25 }}>
              <a
                onClick={() => {
                  setIsOpen(false);
                  setHomeCtx({ currentSection: 4, doSmoothScroll: true });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faAddressCard}></FontAwesomeIcon>
                <span className="min-w-20">Contact Me</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == 4 ? 'opacity-100' : ''
                  } transition-opacity duration-300 size-5`}
                  icon={faLeftLong}></FontAwesomeIcon>
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>

      {!isMobile && (
        <AnimatePresence>
          <motion.ul
            variants={parentNavVariants}
            initial="hidden"
            animate="show"
            className="flex justify-evenly gap-2 p-3 px-4 min-w-72 rounded-3xl border border-glassyedge">
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx({ currentSection: 1, doSmoothScroll: true });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == 1 ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faHouse} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  Home
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx({ currentSection: 2, doSmoothScroll: true });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == 2 ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faUser} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  About
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx({ currentSection: 3, doSmoothScroll: true });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == 3 ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faLightbulb} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  Experience
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx({ currentSection: 4, doSmoothScroll: true });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == 4 ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faScrewdriverWrench} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  Projects
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx({ currentSection: 4, doSmoothScroll: true });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == 4 ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faAddressCard} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  Contact
                </span>
              </a>
            </motion.li>
          </motion.ul>
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Sidebar;
