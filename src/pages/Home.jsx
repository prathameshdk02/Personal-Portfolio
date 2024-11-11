import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <section className="page-section">
      <article className="flex flex-col gap-12 sm:gap-8 sm:flex-row items-center pt-6 px-4 sm:pt-20 md:px-4 lg:px-8">
        <div className="space-y-1 self-center flex-1">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: [0, -15, 15, 0] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ transformOrigin: 'center' }}
            className="text-4xl lg:text-[2.75rem] xl:text-5xl text-secondaryhead inline-block">
            Hello I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-5xl lg:text-[3.50rem] xl:text-6xl text-primaryhead font-bold !mb-2">
            Prathamesh Kadve
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}>
            <ReactTyped
              className="text-4xl lg:text-[2.75rem] xl:text-5xl text-secondaryhead font-extrabold"
              startDelay={2000}
              typeSpeed={50}
              backSpeed={40}
              strings={[
                'Full Stack Web Developer',
                'MERN Stack',
                'Passionate Coder',
                'Full Stack Web Developer',
              ]}></ReactTyped>
          </motion.div>
          {/* <h2 className="text-4xl lg:text-[2.75rem] xl:text-5xl text-secondaryhead font-extrabold !mt-2">Full Stack Web Developer</h2> */}
        </div>
        <div className="inline-block rounded-full border-8 p-4 border-secondaryhead">
          <img
            className="rounded-full inline-block sm:min-w-52 sm:size-52 sm:max-w-52 lg:min-w-64 lg:size-64 lg:max-w-64"
            src="/images/hero.jpg"
            alt="Profile Photo"
          />
        </div>
      </article>
    </section>
  );
};

export default Home;
