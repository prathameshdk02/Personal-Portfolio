import React, { useState, useEffect, useContext } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faScrewdriverWrench, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLightbulb, faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { popupSpring } from '../../../styles/motion/animations';
import HomeContext from '../../../context/HomeContext';

import * as NAV from '../../../config/navConfig';

const BubbleSidebar = () => {
  const innerWidth = window.innerWidth;
  const { homeCtx, setHomeCtx } = useContext(HomeContext);
  const { mainSectionWidth, currentSection } = homeCtx;
  const rightOffset = Math.round((innerWidth - mainSectionWidth) / 2);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (currentSection == 1) {
      setIsOpen(false);
    }
  }, [currentSection]);

  return (
    <>
      {currentSection !== 1 && (
        <>
          <motion.div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            style={{ right: `calc(${rightOffset}px + 1.5rem)` }}
            className={`bg-opaqueglass cursor-pointer text-primaryhead rounded-full fixed h-14 w-14 bottom-6 flex justify-center items-center z-10`}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={isOpen ? 'open' : 'close'}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={popupSpring}
                transition={{ ...popupSpring.transition, duration: 0.1 }}>
                <FontAwesomeIcon
                  icon={isOpen ? faXmark : faBarsStaggered}
                  className={`${isOpen ? 'pt-[5px] text-xl' : 'text-lg'} `}></FontAwesomeIcon>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 294 }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3, ease: 'linear' }}
                style={{ right: `calc(${rightOffset}px + 1.5rem)` }}
                className="fixed bottom-11 w-14 bg-[#090909] border-2 border-glassyedge rounded-t-3xl rounded-b-xl z-0">
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.25 } }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="h-full flex flex-col gap-2 pt-2 pb-6 justify-evenly rounded-3xl text-primaryhead">
                  <motion.li className="text-center">
                    <a
                      onClick={() => {
                        setHomeCtx((prevHomeCtx) => {
                          return {
                            ...prevHomeCtx,
                            currentSection: NAV.HOME_SECTION_INDEX,
                            doSmoothScroll: true,
                          };
                        });
                      }}
                      className={`group rounded-full hover:bg-glassyedge ${
                        currentSection == NAV.HOME_SECTION_INDEX ? 'bg-glassyedge' : ''
                      } p-2 relative`}>
                      <FontAwesomeIcon icon={faHouse} className="size-5"></FontAwesomeIcon>
                      <span className="absolute -left-2 -top-1 -translate-x-full opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium p-2 bg-[#090909] rounded-s-xl border-2 border-glassyedge border-e-0 ps-4 ">
                        {NAV.HOME_SECTION_NAME}
                      </span>
                    </a>
                  </motion.li>
                  <motion.li className="text-center">
                    <a
                      onClick={() => {
                        setHomeCtx((prevHomeCtx) => {
                          return {
                            ...prevHomeCtx,
                            currentSection: NAV.ABOUT_SECTION_INDEX,
                            doSmoothScroll: true,
                          };
                        });
                      }}
                      className={`group rounded-full hover:bg-glassyedge ${
                        currentSection == NAV.ABOUT_SECTION_INDEX ? 'bg-glassyedge' : ''
                      } p-2 relative`}>
                      <FontAwesomeIcon icon={faUser} className="size-5"></FontAwesomeIcon>
                      <span className="absolute -left-2 -top-1 -translate-x-full opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium p-2 bg-[#090909] rounded-s-xl border-2 border-glassyedge border-e-0 ps-4 ">
                        {NAV.ABOUT_SECTION_NAME}
                      </span>
                    </a>
                  </motion.li>
                  <motion.li className="text-center">
                    <a
                      onClick={() => {
                        setHomeCtx((prevHomeCtx) => {
                          return {
                            ...prevHomeCtx,
                            currentSection: NAV.EXP_SECTION_INDEX,
                            doSmoothScroll: true,
                          };
                        });
                      }}
                      className={`group rounded-full hover:bg-glassyedge ${
                        currentSection == NAV.EXP_SECTION_INDEX ? 'bg-glassyedge' : ''
                      } p-2 relative`}>
                      <FontAwesomeIcon icon={faLightbulb} className="size-5"></FontAwesomeIcon>
                      <span className="absolute -left-2 -top-1 -translate-x-full opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium p-2 bg-[#090909] rounded-s-xl border-2 border-glassyedge border-e-0 ps-4 ">
                        {NAV.EXP_SECTION_NAME}
                      </span>
                    </a>
                  </motion.li>
                  <motion.li className="text-center">
                    <a
                      onClick={() => {
                        setHomeCtx((prevHomeCtx) => {
                          return {
                            ...prevHomeCtx,
                            currentSection: NAV.PROJECT_SECTION_INDEX,
                            doSmoothScroll: true,
                          };
                        });
                      }}
                      className={`group rounded-full hover:bg-glassyedge ${
                        currentSection == NAV.PROJECT_SECTION_INDEX ? 'bg-glassyedge' : ''
                      } p-2 relative`}>
                      <FontAwesomeIcon icon={faScrewdriverWrench} className="size-5"></FontAwesomeIcon>
                      <span className="absolute -left-2 -top-1 -translate-x-full opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium p-2 bg-[#090909] rounded-s-xl border-2 border-glassyedge border-e-0 ps-4 ">
                        {NAV.PROJECT_SECTION_NAME}
                      </span>
                    </a>
                  </motion.li>
                  <motion.li className="text-center">
                    <a
                      onClick={() => {
                        setHomeCtx((prevHomeCtx) => {
                          return {
                            ...prevHomeCtx,
                            currentSection: NAV.SKILL_SECTION_INDEX,
                            doSmoothScroll: true,
                          };
                        });
                      }}
                      className={`group rounded-full hover:bg-glassyedge ${
                        currentSection == NAV.SKILL_SECTION_INDEX ? 'bg-glassyedge' : ''
                      } p-2 relative`}>
                      <FontAwesomeIcon icon={faAddressCard} className="size-5"></FontAwesomeIcon>
                      <span className="absolute -left-2 -top-1 -translate-x-full opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400 font-medium p-2 bg-[#090909] rounded-s-xl border-2 border-glassyedge border-e-0 ps-4 ">
                        {NAV.SKILL_SECTION_NAME}
                      </span>
                    </a>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default BubbleSidebar;
