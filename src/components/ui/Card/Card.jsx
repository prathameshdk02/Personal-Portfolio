import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Card = ({ isMobile, className, whileHover, variants, children, transition, cardIcon }) => {
  return (
    <motion.article
      whileHover={whileHover}
      variants={variants}
      initial="initial"
      whileInView={{ ...variants.animate, transition }}
      viewport={{ once: true, amount: 0.9 }}
      className={`card glassy-card relative flex flex-col space-y-2 ${className ? className : ''}`}>
      <div className="absolute size-16 glassy border-2 border-glassyedge right-4 -top-4 flex justify-center items-center rounded-xl">
        <FontAwesomeIcon className="size-6" icon={cardIcon}></FontAwesomeIcon>
      </div>
      {children}
    </motion.article>
  );
};

export default Card;
