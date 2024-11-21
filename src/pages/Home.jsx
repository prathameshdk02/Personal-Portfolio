import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

import { useDebounce } from '../hooks/useDebounce';

let SECTION_COUNT = 0;

const Home = () => {
  const [currentSection, setCurrentSection] = useState(1);

  let touchStart = 0;

  const handleSectionChange = useDebounce((event) => {
    if (event.deltaY > 0 && currentSection < SECTION_COUNT) {
      setCurrentSection((prev) => prev + 1);
    } else if (event.deltaY < 0 && currentSection > 1) {
      setCurrentSection((prev) => prev - 1);
    }
  }, 200);

  // Event Handlers
  const handleWheelEvent = (event) => {
    event.preventDefault();
    handleSectionChange(event);
  };

  const handleTouchStart = (event) => {
    touchStart = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    const deltaY = touchStart - event.touches[0].clientY;

    if (touchStart < 100 && deltaY < -200 && currentSection == 1) {
      location.reload();
      return;
    }

    if (Math.abs(deltaY) > 5) {
      if (event.cancelable) {
        event.preventDefault();
        handleSectionChange({ deltaY });
      }
    }
  };

  // Updates the number of sections when components mounts
  useEffect(() => {
    SECTION_COUNT = document.querySelectorAll('section[class*="home-"]').length;
  }, []);

  // Scrolls to the currentSection smoothly
  useEffect(() => {
    const section = document.getElementsByClassName(`home-${currentSection}`)[0];

    section.scrollIntoView({ behaviour: 'smooth', block: 'start' });
  }, [currentSection]);

  // Adding & removing Event listeners along rerenders
  useEffect(() => {
    window.addEventListener('wheel', handleWheelEvent, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [currentSection]);

  return (
    <>
      <section className="home-1 min-h-svh md:min-h-[95svh] pt-20 sm:pt-0 text-slate-100 sm:flex sm:justify-center sm:align-center">
        <article className="w-full flex flex-col items-center gap-20 sm:gap-8 sm:flex-row pt-8 sm:pt-0">
          <div className="space-y-1 self-center flex-1">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: [0, -15, 15, 0] }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{ transformOrigin: 'center' }}
              className="text-4xl lg:text-[2.5rem] xl:text-5xl text-secondaryhead inline-block">
              Hello, I'm
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-5xl lg:text-[3.25rem] xl:text-6xl text-primaryhead font-bold !mb-2">
              Prathamesh Kadve
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}>
              <ReactTyped
                className="text-4xl lg:text-[2.5rem] xl:text-5xl text-secondaryhead font-extrabold"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-block rounded-full border-8 p-4 border-secondaryhead relative">
            <motion.div
              initial={{ opacity: 0, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, rotate: 30 }}
              transition={{ duration: 1, delay: 2 }}
              className="border-dots absolute w-[120%] h-[120%] left-1/2 top-1/2 -z-10 border-8 border-l-transparent border-r-transparent border-primaryhead rounded-full"></motion.div>
            <img
              className="w-full min-w-48 max-w-64 rounded-full inline-block sm:min-w-52 sm:max-w-52 lg:min-w-64 lg:size-64 lg:max-w-64"
              src="/images/hero.jpg"
              alt="Profile Photo"
            />
          </motion.div>
        </article>
      </section>
      <section className="home-2 min-h-svh md:min-h-[95svh] pt-12 mt-14 sm:mt-0 text-slate-100">
        <article>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
            About Me
          </motion.h2>
        </article>
      </section>
      <section className="home-3 min-h-svh md:min-h-[95svh] pt-12 text-slate-100">
        <article>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
            Work Experience
          </motion.h2>
        </article>
      </section>
      <section className="home-4 min-h-svh md:min-h-[95svh] pt-12 text-slate-100">
        <article>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
            Projects
          </motion.h2>
        </article>
      </section>
    </>
  );
};

export default Home;
