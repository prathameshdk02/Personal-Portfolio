import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons/faBarsStaggered';
import { faLeftLong, faHouse, faScrewdriverWrench, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLightbulb, faAddressCard } from '@fortawesome/free-regular-svg-icons';

const HOME_URL = '/';
const BIO_URL = '/bio';
const INTERESTS_URL = '/interests';
const PROJECTS_URL = '/projects';
const CONTACTME_URL = '/contact';

const Sidebar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="absolute right-6 top-6 sm:right-10 sm:top-10 text-white">
      {isMobile && !isOpen && (
        <FontAwesomeIcon icon={faBarsStaggered} className="size-5" onClick={toggleMobileSidebar} />
      )}

      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="glassy-slide-down fixed w-full top-0 left-1/2 rounded-b-lg transform -translate-x-1/2 p-6">
            <FontAwesomeIcon
              icon={faXmark}
              className="size-5 absolute right-6 top-6"
              onClick={toggleMobileSidebar}
            />
            <motion.h2 className="text-3xl text-primaryhead font-semibold">Navigation</motion.h2>
            <motion.h2 className="text-2xl text-secondaryhead mb-4">Go To</motion.h2>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}>
              <NavLink
                to={HOME_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                {({ isActive }) => {
                  return (
                    <>
                      <FontAwesomeIcon className="size-5" icon={faHouse}></FontAwesomeIcon>
                      <span className="min-w-20">Home</span>
                      <FontAwesomeIcon
                        className={`opacity-0 group-hover:opacity-100 ${
                          isActive ? 'opacity-100' : ''
                        } transition-opacity duration-300 size-5`}
                        icon={faLeftLong}></FontAwesomeIcon>
                    </>
                  );
                }}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}>
              <NavLink
                to={BIO_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                {({ isActive }) => {
                  return (
                    <>
                      <FontAwesomeIcon className="size-5" icon={faUser}></FontAwesomeIcon>
                      <span className="min-w-20">Bio</span>
                      <FontAwesomeIcon
                        className={`opacity-0 group-hover:opacity-100 ${
                          isActive ? 'opacity-100' : ''
                        } transition-opacity duration-300 size-5`}
                        icon={faLeftLong}></FontAwesomeIcon>
                    </>
                  );
                }}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.25 }}>
              <NavLink
                to={INTERESTS_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                {({ isActive }) => {
                  return (
                    <>
                      <FontAwesomeIcon className="size-5" icon={faLightbulb}></FontAwesomeIcon>
                      <span className="min-w-20">Interests</span>
                      <FontAwesomeIcon
                        className={`opacity-0 group-hover:opacity-100 ${
                          isActive ? 'opacity-100' : ''
                        } transition-opacity duration-300 size-5`}
                        icon={faLeftLong}></FontAwesomeIcon>
                    </>
                  );
                }}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.25 }}>
              <NavLink
                to={PROJECTS_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                {({ isActive }) => {
                  return (
                    <>
                      <FontAwesomeIcon className="size-5" icon={faScrewdriverWrench}></FontAwesomeIcon>
                      <span className="min-w-20">Projects</span>
                      <FontAwesomeIcon
                        className={`opacity-0 group-hover:opacity-100 ${
                          isActive ? 'opacity-100' : ''
                        } transition-opacity duration-300 size-5`}
                        icon={faLeftLong}></FontAwesomeIcon>
                    </>
                  );
                }}
              </NavLink>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.25 }}>
              <NavLink
                to={CONTACTME_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="group flex items-center gap-3 py-[0.65rem]">
                {({ isActive }) => {
                  return (
                    <>
                      <FontAwesomeIcon className="size-5" icon={faAddressCard}></FontAwesomeIcon>
                      <span className="min-w-20">Contact Me</span>
                      <FontAwesomeIcon
                        className={`opacity-0 group-hover:opacity-100 ${
                          isActive ? 'opacity-100' : ''
                        } transition-opacity duration-300 size-5`}
                        icon={faLeftLong}></FontAwesomeIcon>
                    </>
                  );
                }}
              </NavLink>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>

      {!isMobile && (
        <AnimatePresence>
          <ul className="flex justify-evenly gap-2 p-3 px-4 min-w-72 rounded-3xl border border-glassyedge">
            <li>
              <NavLink
                to={HOME_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `group rounded-full hover:bg-glassyedge ${isActive ? 'bg-glassyedge' : ''} p-2 relative`
                }>
                <FontAwesomeIcon icon={faHouse} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={BIO_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `group rounded-full hover:bg-glassyedge ${isActive ? 'bg-glassyedge' : ''} p-2 relative`
                }>
                <FontAwesomeIcon icon={faUser} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400">
                  Bio
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={INTERESTS_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `group rounded-full hover:bg-glassyedge ${isActive ? 'bg-glassyedge' : ''} p-2 relative`
                }>
                <FontAwesomeIcon icon={faLightbulb} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400">
                  Interests
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={PROJECTS_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `group rounded-full hover:bg-glassyedge ${isActive ? 'bg-glassyedge' : ''} p-2 relative`
                }>
                <FontAwesomeIcon icon={faScrewdriverWrench} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400">
                  Projects
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={CONTACTME_URL}
                onClick={() => {
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `group rounded-full hover:bg-glassyedge ${isActive ? 'bg-glassyedge' : ''} p-2 relative`
                }>
                <FontAwesomeIcon icon={faAddressCard} className="size-5"></FontAwesomeIcon>
                <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-400">
                  Contact
                </span>
              </NavLink>
            </li>
          </ul>
        </AnimatePresence>
      )}
    </nav>
  );
};

export default Sidebar;
