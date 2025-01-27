import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faLocationDot, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faComment, faUser, faLightbulb } from '@fortawesome/free-regular-svg-icons';

import { useDebounce } from '../hooks/useDebounce';
import { animationDelay } from '../config/config';
import { fadeIn, pulsate, verticalBob } from '../styles/motion/animations';

import Card from '../components/ui/Card/Card';
import InfoPill from '../components/ui/InfoPill/InfoPill';
import Timeline, { TimeElement } from '../components/ui/Timeline/Timeline';

let SECTION_COUNT = 0;

const Home = ({ isMobile }) => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleDTSectionChange = useDebounce(() => {
    setCurrentSection((currentSection) => {
      if (currentSection < SECTION_COUNT) {
        return currentSection + 1;
      }
      return 1;
    });
  });

  // Updates the number of sections when components mounts
  useEffect(() => {
    SECTION_COUNT = document.querySelectorAll('section[class*="home-"]').length;
  }, []);

  // Scrolls to the currentSection smoothly
  useEffect(() => {
    if (currentSection == 1) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const section = document.getElementsByClassName(`home-${currentSection}`)[0];

    section.scrollIntoView({ behaviour: 'smooth', block: 'start' });
  }, [currentSection]);

  const downloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = '/pdfs/resume-2025.pdf';
    anchor.download = 'Prathamesh-Kadve-Resume-2025.pdf';
    anchor.click();
  };

  // Prevent Markup Rerendering even if the currentSection has changed.
  const homeMarkup = useMemo(() => {
    return (
      <>
        <section
          onDoubleClick={handleDTSectionChange}
          className="home-1 pt-20 sm:min-h-svh sm:pt-0 text-slate-100 flex flex-col items-center justify-center">
          <article className="w-full flex flex-col items-center gap-20 sm:gap-4 sm:flex-row pt-8 sm:pt-0">
            <div className="space-y-1 self-center flex-1">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: [0, -15, 15, 0] }}
                transition={{ duration: 1, delay: animationDelay + 0, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
                className="text-4xl lg:text-[2.5rem] xl:text-5xl text-secondaryhead inline-block">
                Hello, I'm
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: animationDelay + 1 }}
                className="text-5xl lg:text-[3.25rem] xl:text-6xl text-primaryhead font-bold !mb-2">
                Prathamesh Kadve
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: animationDelay + 1.5 }}>
                <ReactTyped
                  className="text-4xl lg:text-[2.5rem] xl:text-5xl text-secondaryhead font-extrabold"
                  startDelay={animationDelay * 1000 + 1500}
                  typeSpeed={50}
                  backSpeed={40}
                  strings={[
                    'Full Stack Web Developer',
                    'MERN Stack',
                    'Passionate Coder',
                    'Full Stack Web Developer',
                  ]}></ReactTyped>
              </motion.div>
              <div className="!mt-4">
                <motion.button
                  variants={fadeIn}
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5, delay: animationDelay + 2 }}
                  className="hero-button font-medium flex items-center gap-3"
                  onClick={downloadResume}>
                  <FontAwesomeIcon icon={faDownload} className="size-5" />
                  <span>Download Resume</span>
                </motion.button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="inline-block rounded-full border-8 p-4 border-secondaryhead relative">
              <motion.div
                initial={{ opacity: 0, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, rotate: 30 }}
                transition={{ duration: 1.5, delay: animationDelay + 1.5 }}
                className="absolute w-[120%] h-[120%] left-1/2 top-1/2 border-8 border-l-transparent border-r-transparent border-primaryhead rounded-full"></motion.div>
              <img
                className="w-full min-w-48 max-w-52 rounded-full inline-block xl:max-w-60"
                src="/images/hero.jpg"
                alt="Profile Photo"
              />
            </motion.div>
          </article>
        </section>

        {/* Scroll down tip - Negative Margin here*/}
        <div className="text-primarytext justify-end hidden sm:block sm:-mt-[12vh] text-center">
          <motion.div
            className="protip-mouse-body"
            variants={verticalBob}
            initial="initial"
            animate="animate"
            transition={verticalBob.transition}>
            <div className="protip-mouse-tick"></div>
          </motion.div>
          <motion.p
            className="mt-2 text-sm font-medium"
            variants={pulsate}
            animate="animate"
            transition={pulsate.transition}>
            Double Click for next Section!
          </motion.p>
        </div>

        <section
          onDoubleClick={handleDTSectionChange}
          className="home-2 pt-12 mt-14 sm:mt-0 text-slate-100 space-y-10">
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 1 }}
            className="text-3xl lg:text-[2rem] xl:text-4xl font-bold relative">
            About Me
          </motion.h2>
          <motion.section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:col-span-2"
              cardIcon={faUser}>
              <h4 className="text-xl font-semibold">Bio</h4>
              <p className="text-secondarytext">
                Self-taught Full Stack Web Developer.
                <br /> Currently exploring the web domain & the wonders it can bring about.
                <br /> Consistent Performer, Consistent Learner & Hardworking.
              </p>
            </Card>
            <Card
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
              variants={fadeIn}
              transition={{ duration: 0.5, delay: isMobile ? 0.1 : 1 }}
              cardIcon={faComment}>
              <h4 className="text-xl font-semibold">Thoughts</h4>
              <p className="text-secondarytext">"Curiosity leads to perfection."</p>
            </Card>
          </motion.section>
        </section>
        <section
          onDoubleClick={handleDTSectionChange}
          className="home-3 flex flex-col gap-10 pt-12 text-slate-100">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="text-3xl lg:text-[2rem] xl:text-4xl font-bold relative">
            Work Experience
          </motion.h2>

          {/* Render the Work Experience Timeline */}
          <Timeline>
            <TimeElement>
              <h3 className="text-sm text-secondarytext">June 2024 - July 2024</h3>
              <h2 className="text-xl text-primaryhead font-semibold">Jr. Software Developer Intern</h2>
              <h3 className="text-sm text-secondarytext font-medium">Sciative Solutions</h3>

              <p>Responsible for developing web applications at Sciative.</p>
              <ul className="text-primarytext text-base list-disc ps-5">
                <li>Implemented a new web application for automating invoice generation at Sciative.</li>
                <li>
                  Gained hands on experience working with Django & Python libraries like Pandas, Numpy &
                  Reportlab.
                </li>
                <li>
                  Collaborated with the product managers to understand their requirements and tailored the
                  application according to them.
                </li>
              </ul>

              <div className="!mt-3">
                <InfoPill>On-Site</InfoPill>
                <InfoPill>Stipend</InfoPill>
              </div>
            </TimeElement>
            <TimeElement>
              <h3 className="text-sm text-secondarytext">June 2023 - July 2023</h3>
              <h2 className="text-xl text-primaryhead font-semibold">Machine Learning Intern</h2>
              <h3 className="text-sm text-secondarytext font-medium">Yhills Edutech</h3>

              <p>Laid foundation machine learning domain</p>
              <ul className="text-primarytext text-base list-disc ps-5">
                <li>
                  Developed machine learning models for Cab Fare Prediction & H1N1 Virus Awareness Prediction.
                </li>
                <li>Learned different aspects of Machine Learning & laid basic foundation in it.</li>
              </ul>
              <div className="!mt-3">
                <InfoPill>Remote</InfoPill>
              </div>
            </TimeElement>
          </Timeline>
        </section>

        {/* Projects Section */}
        <section
          onDoubleClick={handleDTSectionChange}
          className="home-4 min-h-svh flex flex-col gap-10 pt-12 text-slate-100">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 1 }}
            className="text-3xl lg:text-[2rem] xl:text-4xl font-bold">
            Projects
          </motion.h2>

          <section className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4 ">
            <Card className="project-card">
              <div className="img-vignette">
                <img className="project-img" src="/images/finance.png" alt="Finance Dashboard Image" />
              </div>
              <h2 className="text-xl font-medium">Finance Dashboard</h2>
              <h3 className="text-sm text-secondarytext font-medium">Sciative Solutions</h3>
              <p>Developed a dashboard for automated invoice generation.</p>

              <ul className="text-primarytext text-base list-disc ps-5">
                <li>Helped save 50% of the time spent manually executing SQL Queries to generate invoices</li>
                <li>
                  The dashboard assisted in generating different invoice types, with additional support for
                  automated annexure generation.
                </li>
              </ul>

              <div className="!mt-3">
                <InfoPill>On-Site</InfoPill>
                <InfoPill>Stipend</InfoPill>
              </div>
            </Card>

            {/* Signature Based Ransomware Detection */}
            <Card className="project-card">
              <div className="img-vignette">
                <img className="project-img" src="/images/sbrd.png" alt="SBRDS Image" />
              </div>
              <h2 className="text-xl font-medium">Signature Based Ransomware Detection</h2>
              <h3 className="text-sm text-secondarytext font-medium">Academic Project</h3>

              <p>
                Developed a signature-based ransomware detection system to identify potential ransomware
                samples.
              </p>

              <ul className="text-primarytext text-base list-disc ps-5">
                <li>Helped detect potential ransomware signatures in local files.</li>
                <li>
                  Extracted ransomware signatures from over 36555 live ransomware samples for creating the
                  signature database.
                </li>
              </ul>

              <div className="!mt-3">
                <InfoPill>On-Site</InfoPill>
                <InfoPill>Stipend</InfoPill>
              </div>
            </Card>

            {/* Sorting Algorithm Visualizer */}
            <Card className="project-card">
              <div className="img-vignette">
                <img
                  className="project-img"
                  src="/images/algo.png"
                  alt="Sorting Algorithm Visualizer Image"
                />
              </div>
              <h2 className="text-xl font-medium">Sorting Algorithm Visualizer</h2>
              <h3 className="text-sm text-secondarytext font-medium">Academic Project</h3>

              <p>Worked upon a web application for visualizing Sorting Algorithms</p>

              <ul className="text-primarytext text-base list-disc ps-5">
                <li>Gained a deeper intuition for sorting algorithms like MergeSort and InsertionSort</li>
                <li>
                  Collaborated within a team of four people, understanding their opinions & tailoring the
                  application as per suggestions
                </li>
              </ul>

              <div className="!mt-3">
                <InfoPill>On-Site</InfoPill>
                <InfoPill>Stipend</InfoPill>
              </div>
            </Card>
          </section>
        </section>
      </>
    );
  }, []);

  return homeMarkup;
};

export default Home;
