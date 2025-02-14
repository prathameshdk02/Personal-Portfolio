import React, { useContext, useEffect, useRef } from 'react';

import { MOBILE_BREAKPOINT } from '../../../config/layoutConfig';

import Sidebar from '../Sidebar/Sidebar';
import SocialList from '../SocialList/SocialList';
import HomeContext from '../../../context/HomeContext';

const Layout = ({ innerWidth, children }) => {
  const isMobile = innerWidth < MOBILE_BREAKPOINT;
  const { setHomeCtx } = useContext(HomeContext);
  const mainRef = useRef();

  useEffect(() => {
    setHomeCtx((prevHomeCtx) => {
      return { ...prevHomeCtx, mainSectionWidth: mainRef.current.getBoundingClientRect().width };
    });
  }, [innerWidth]);

  return (
    <main
      ref={mainRef}
      id="main-glassy"
      className="overflow-x-hidden glassy-filter max-w-[1200px] md:border-2 md:border-y-0 md:border-glassyedge px-7 pb-8 sm:px-12 md:mx-4 lg:px-16 bg-primarybg relative">
      <SocialList className="absolute left-8 top-8 sm:left-12 sm:top-9 md:top-12 lg:left-16 lg:top-13" />
      <Sidebar isMobile={isMobile} />
      {children}
    </main>
  );
};

export default Layout;
