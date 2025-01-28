import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { faLeftLong, faHouse, faScrewdriverWrench, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLightbulb, faAddressCard } from '@fortawesome/free-regular-svg-icons';

import { animationDelay } from '../../../config/config';
import HomeContext from '../../../context/HomeContext';
import { popupSpring } from '../../../styles/motion/animations';

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

const HOME_SECTION_NAME = 'Home';
const ABOUT_SECTION_NAME = 'About';
const EXP_SECTION_NAME = 'Experience';
const PROJECT_SECTION_NAME = 'Projects';
const SKILL_SECTION_NAME = 'Skills';

const HOME_SECTION_INDEX = 1;
const ABOUT_SECTION_INDEX = 2;
const EXP_SECTION_INDEX = 3;
const PROJECT_SECTION_INDEX = 4;
const SKILL_SECTION_INDEX = 4;

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
          variants={popupSpring}
          initial="initial"
          animate="animate"
          transition={{
            ...popupSpring.transition,
            duration: 1,
            delay: 1.5,
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
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: HOME_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faHouse}></FontAwesomeIcon>
                <span className="min-w-20">{HOME_SECTION_NAME}</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == HOME_SECTION_INDEX ? 'opacity-100' : ''
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
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: ABOUT_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faUser}></FontAwesomeIcon>
                <span className="min-w-20">{ABOUT_SECTION_NAME}</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == ABOUT_SECTION_INDEX ? 'opacity-100' : ''
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
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: EXP_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faLightbulb}></FontAwesomeIcon>
                <span className="min-w-20">{EXP_SECTION_NAME}</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == EXP_SECTION_INDEX ? 'opacity-100' : ''
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
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: PROJECT_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faScrewdriverWrench}></FontAwesomeIcon>
                <span className="min-w-20">{PROJECT_SECTION_NAME}</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == PROJECT_SECTION_INDEX ? 'opacity-100' : ''
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
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: SKILL_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                <FontAwesomeIcon className="size-5" icon={faAddressCard}></FontAwesomeIcon>
                <span className="min-w-20">{SKILL_SECTION_NAME} Me</span>
                <FontAwesomeIcon
                  className={`opacity-0 group-hover:opacity-100 ${
                    currentSection == SKILL_SECTION_INDEX ? 'opacity-100' : ''
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
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: HOME_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == HOME_SECTION_INDEX ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faHouse} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  {HOME_SECTION_NAME}
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: ABOUT_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == ABOUT_SECTION_INDEX ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faUser} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  {ABOUT_SECTION_NAME}
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: EXP_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == EXP_SECTION_INDEX ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faLightbulb} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  {EXP_SECTION_NAME}
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: PROJECT_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == PROJECT_SECTION_INDEX ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faScrewdriverWrench} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  {PROJECT_SECTION_NAME}
                </span>
              </a>
            </motion.li>
            <motion.li variants={childNavVariants}>
              <a
                onClick={() => {
                  setHomeCtx((prevHomeCtx) => {
                    return { ...prevHomeCtx, currentSection: SKILL_SECTION_INDEX, doSmoothScroll: true };
                  });
                }}
                className={`group rounded-full hover:bg-glassyedge ${
                  currentSection == SKILL_SECTION_INDEX ? 'bg-glassyedge' : ''
                } p-2 relative`}>
                <FontAwesomeIcon icon={faAddressCard} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium">
                  {SKILL_SECTION_NAME}
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
