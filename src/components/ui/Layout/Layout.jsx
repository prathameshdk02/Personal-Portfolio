import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import SocialList from '../SocialList/SocialList';

const Layout = ({ isMobile }) => {
  return (
    <main id="main-glassy" className="overflow-x-hidden glassy-filter max-w-[1224px] lg:w-[85%] md:border md:border-glassyedge mb-4 md:mx-4 px-7 sm:px-12 lg:px-16 bg-primarybg relative">
      <SocialList className="absolute left-8 top-8 sm:left-12 sm:top-9 md:top-12 lg:left-16 lg:top-14"/>
      <Sidebar isMobile={isMobile} />
      <Outlet />
    </main>
  );
};

export default Layout;
