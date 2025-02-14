import React from "react";
import {
  AnimatePresence,
  disableInstantTransitions,
  motion,
} from "framer-motion";

import { fadeIn } from "../../../styles/motion/animations";

import Card, { MotionCard } from "../Card/Card";

export const TimeToggle = ({ children }) => {
  return (
    <AnimatePresence>
      <div className="hidden sm:block">{children}</div>
    </AnimatePresence>
  );
};

export const TimeElement = ({ children }) => {
  return (
    <>
      <MotionCard
        className="box-border relative sm:before:content-[''] sm:before:size-4 sm:before:bg-primarytext sm:before:absolute sm:before:top-6 sm:before:-left-6 sm:before:-translate-x-1/2 sm:before:rotate-45 sm:before:rounded-sm sm:ml-6"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.7, delay: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {children}
      </MotionCard>
    </>
  );
};

const Timeline = ({ children }) => {
  return (
    <motion.section
      className={`sm:pl-3 flex-1 relative space-y-4`}
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ delay: 1 }}
    >
      {children}
      <motion.div
        className={`absolute hidden sm:block top-0 left-3 h-full bg-glassyedge w-1 rounded-full !mt-0`}
      ></motion.div>
    </motion.section>
  );
};

export default Timeline;
