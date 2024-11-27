import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { fadeIn, fadeUp } from '../../../styles/motion/animations';

const InfoCard = ({ text, hoverText, textIcon, hoverTextIcon, isMobile, navigateTo }) => {
  const infoCardRef = useRef();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(isMobile ? true : false);

  const handleOnClick = () => {
    navigate(navigateTo);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isMobile) {
      return;
    }
    infoCardRef.current.addEventListener('mouseenter', handleMouseEnter);
    infoCardRef.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      try{
        infoCardRef.current.removeEventListener('mouseenter', handleMouseEnter);
        infoCardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }catch(e){
        console.info("InfoCard couldn't find the Event Listener to be removed.");
      }
    };
  }, [isHovered]);

  return (
    <motion.article
      variants={fadeIn}
      initial="initial"
      whileInView={{ ...fadeIn.animate, transition: { duration: 1, delay: 0.7 } }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 1 }}
      className="card flex flex-row-reverse gap-6 justify-between items-center text-base md:w-3/4"
      ref={infoCardRef}
      onClick={handleOnClick}>
      <motion.div className="flex-1 font-semibold h-6 overflow-hidden space-y-16">
        <AnimatePresence mode="wait">
          {!isHovered && (
            <motion.span
              key="text"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="block">
              {text}
            </motion.span>
          )}
          {isHovered && (
            <motion.span
              key="hoverText"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.2 }}
              className="block">
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div className='size-6'>
        <AnimatePresence mode="wait">
          {!isHovered && (
            <motion.div
              key="infoIcon"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: 'spring', damping: 10, stiffness: 100 }}>
              <FontAwesomeIcon className="size-6 !mt-0" icon={textIcon}></FontAwesomeIcon>
            </motion.div>
          )}
          {isHovered && (
            <motion.div
              key="redirectIcon"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
              transition={{ type: 'spring', damping: 10, stiffness: 100 }}>
              <FontAwesomeIcon className="size-6 !mt-0" icon={hoverTextIcon}></FontAwesomeIcon>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
};

export default InfoCard;
