import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Card = ({ className, whileHover, variants, children, transition, cardIcon }) => {
  return (
    <motion.article
      whileHover={whileHover}
      variants={variants}
      initial="initial"
      whileInView={{ ...variants?.animate, transition }}
      viewport={{ once: true, amount: 0.9 }}
      className={`card relative flex flex-col space-y-2 ${className ? className : ''}`}>
      {children}
      
      {cardIcon && <div className="absolute size-16 border-2 bg-cardbg border-glassyedge right-4 -top-4 flex justify-center items-center rounded-xl !mt-0">
        <FontAwesomeIcon className="size-6" icon={cardIcon}></FontAwesomeIcon>
      </div>}
    </motion.article>
  );
};

export default Card;
