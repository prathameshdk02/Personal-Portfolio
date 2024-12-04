import React from 'react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { animationDelay } from '../../../config/config';

const wrapperVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: animationDelay + 1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const SocialList = ({ className }) => {
  return (
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      animate="show"
      className={`flex gap-5 ${className}`}>
      <motion.a
        variants={itemVariants}
        href="https://www.linkedin.com/in/prathamesh-kadve-9948ba232"
        target="_blank">
        <FontAwesomeIcon className="size-6 text-primaryhead" icon={faLinkedin} />
      </motion.a>
      <motion.a variants={itemVariants} href="https://github.com/prathameshdk02" target="_blank">
        <FontAwesomeIcon className="size-6 text-primaryhead" icon={faGithub} />
      </motion.a>
      <motion.a variants={itemVariants} href="https://x.com/prathameshdk02" target="_blank">
        <FontAwesomeIcon className="size-6 text-primaryhead" icon={faTwitter} />
      </motion.a>
    </motion.div>
  );
};

export default SocialList;
