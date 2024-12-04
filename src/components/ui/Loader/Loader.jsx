import React, { useState, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, animate, useAnimation, useMotionValue, useMotionValueEvent } from 'framer-motion';

import LoaderContext from '../../../context/LoaderContext';

const spreadVariants = {
  initial: { scale: 0, opacity: 0, x: '-50%', y: '-50%' },
  visible: { scale: 1, opacity: 1 },
};

const logoVariants = {
  initial: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, type: 'spring', damping: 10, stiffness: 100, delay: 0.2 },
  },
  rotate: {
    rotate: 360,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  hidden: { scale: 0.6, rotate: 360, opacity: 0, transition: { duration: 0.4 } },
};

const Loader = () => {
  const { loaderState, setLoaderState } = useContext(LoaderContext);
  const isVisible = loaderState.isVisible || false;
  let largerDimension = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight;
  largerDimension += largerDimension * 0.25;

  if (!isVisible) {
    return <></>;
  }

  // Animation Stuff
  const [gradientState, setGradientState] = useState(0);
  const logoControls = useAnimation();
  const spreadControls = useAnimation();
  const gradientSize = useMotionValue(0);
  const targetSize = largerDimension;

  const startReveal = async () => {
    await logoControls.start('hidden');
    await animate(gradientSize, targetSize, { duration: 1.8 });
    setLoaderState({ ...loaderState, isVisible: false });
  };

  useMotionValueEvent(gradientSize, 'change', () => {
    setGradientState(gradientSize.get());
  });

  useEffect(() => {
    const startAnimations = async () => {
      spreadControls.start('visible');
      await logoControls.start('visible');
      logoControls.start('rotate');
      setTimeout(() => {
        startReveal();
      }, 1000);
    };

    startAnimations();
  }, []);

  return createPortal(
    <motion.div
      variants={spreadVariants}
      initial="initial"
      animate={spreadControls}
      className={`fixed top-1/2 left-1/2 z-10 flex justify-center items-center rounded-full`}
      style={{
        gradientSize,
        width: `${largerDimension}px`,
        height: `${largerDimension}px`,
        background: `radial-gradient(circle at center, transparent ${gradientState}px, #000000 ${
          gradientState + 1
        }px)`,
      }}>
      <motion.svg
        variants={logoVariants}
        initial="initial"
        animate={logoControls}
        className="size-24"
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 275.98 353.99">
        <g id="Layer_1-2" data-name="Layer 1">
          <g>
            <path
              d="m23,23.1l23,23h60.1c68.7,0,69.4.1,85.4,7.7,17.6,8.4,31.5,25.6,36.7,45.3,2.7,10.2,2.2,26.4-1.1,36.5-6.9,21.3-23.6,38.4-44.1,45.2-7.2,2.4-9.8,2.7-26.2,3.1l-18.3.4v34.9c0,19.2.3,34.9.6,34.9s10.5-5.8,22.8-12.8c12.4-7.2,24.3-13.4,27.1-14.1,7.8-2,22-7.7,28.8-11.7,39.5-23.1,61.8-65.5,57.7-109.5-3.2-34.2-18.9-62.6-45.8-83-9.2-6.9-28.6-16.3-40.7-19.6l-10-2.8-89.5-.3L0,0l23,23.1Z"
              fill="#dcdcdc"
            />
            <path
              d="m46.5,220.11v133.88l4.3-3.1c2.3-1.74,12.6-9.17,22.9-16.49l18.8-13.39v-176.65h33.8c36.8,0,42.4-.87,48.7-6.69,4.1-3.97,8.1-12.02,9-18.35.4-2.6.2-7.44-.5-11.16-1.7-8.8-9.3-18.47-16.2-20.58-3.3-1.12-21.4-1.49-62.7-1.49h-58.1v134.01Z"
              fill="#646464"
            />
          </g>
        </g>
      </motion.svg>
    </motion.div>,
    document.getElementById('portals')
  );
};

export default Loader;
