import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

import { faBook, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faComment, faUser, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '../hooks/useDebounce';
import { cardWhileHover, fadeIn } from '../styles/motion/animations';

import Card from '../components/ui/Card/Card';
import InfoCard from '../components/ui/InfoCard/InfoCard';

let SECTION_COUNT = 0;

const Home = ({ isMobile }) => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleDTSectionChange = useDebounce(() => {
    if (currentSection < SECTION_COUNT) {
      setCurrentSection((prev) => prev + 1);
    } else {
      setCurrentSection(1);
    }
  });

  // Event Handlers
  const handleDoubleClick = () => {
    handleDTSectionChange();
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
    window.addEventListener('dblclick', handleDoubleClick);

    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
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
      <section className="home-2 pt-12 mt-14 sm:mt-0 min-h-svh md:min-h-[95svh] text-slate-100 space-y-10">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 1 }}
          className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
          About Me
        </motion.h2>
        <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            // whileHover={cardWhileHover}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sm:col-span-2"
            cardIcon={faUser}>
            <h4 className="text-xl font-semibold">Bio</h4>
            <p className="text-secondarytext">
              A Geek, passionate about Web Development.
              <br /> Self-taught Full Stack Web Developer.
              <br /> Currently exploring the web domain & the wonders it can bring about.
              <br /> Consistent Performer, Consistent Learner & Hardworking.
            </p>
          </Card>
          <Card
            // whileHover={cardWhileHover}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: isMobile ? 0.1 : 0.4 }}
            cardIcon={faBook}>
            <h4 className="text-xl font-semibold">Education</h4>
            <p className="text-secondarytext flex-1 flex items-center">
              Bachelor in Computer Engineering (B.E)
              <br />
              University Of Mumbai
            </p>
            <footer className="text-primarytext">2024</footer>
          </Card>
          <Card
            // whileHover={cardWhileHover}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: isMobile ? 0.1 : 0.6 }}
            cardIcon={faLocationDot}>
            <h4 className="text-xl font-semibold">Based In</h4>
            <p className="text-secondarytext flex-1 flex items-center">
              Uran,
              <br />
              Navi Mumbai
            </p>
            <footer className="text-primarytext">Maharashtra, India</footer>
          </Card>
          <Card
            // whileHover={cardWhileHover}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: isMobile ? 0.1 : 0.8 }}
            cardIcon={faLightbulb}>
            <h4 className="text-xl font-semibold">Hobbies</h4>
            <p className="text-secondarytext">
              Swimming
              <br />
              Playing Video Games <br />
              Building PCs
            </p>
          </Card>
          <Card
            // whileHover={cardWhileHover}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: isMobile ? 0.1 : 1 }}
            cardIcon={faComment}>
            <h4 className="text-xl font-semibold">Thoughts</h4>
            <p className="text-secondarytext">"Curiosity leads to perfection."</p>
          </Card>
        </motion.section>
        <InfoCard
          text="Know More About Me?"
          hoverText={'Visit Bio Section to Know More.'}
          textIcon={faInfoCircle}
          hoverTextIcon={faArrowUpRightFromSquare}
          isMobile={isMobile}
          navigateTo={"/bio"}></InfoCard>
      </section>
      <section className="home-3 min-h-svh md:min-h-[95svh] pt-12 text-slate-100">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 1 }}
          className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
          Work Experience
        </motion.h2>
      </section>
      <section className="home-4 min-h-svh md:min-h-[95svh] pt-12 text-slate-100">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 1 }}
          className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
          Projects
        </motion.h2>
      </section>
    </>
  );
};

export default Home;
