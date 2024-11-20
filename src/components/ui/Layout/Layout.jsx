import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import SocialList from '../SocialList/SocialList';

const Layout = ({ isMobile }) => {
  return (
    <main id="main-glassy" className="overflow-y-scroll glassy w-full max-w-[1240px] sm:mt-4 lg:w-[85%] min-h-svh md:min-h-[95svh] md:max-h-[95svh] md:border md:border-glassyedge mb-4 md:mx-4 rounded-lg bg-primarybg relative">
      <SocialList className="absolute left-8 top-8 sm:left-12 sm:top-9 md:top-12 lg:left-16 lg:top-14"/>
      <Sidebar isMobile={isMobile} />
      <Outlet />
    </main>
  );
};

export default Layout;
