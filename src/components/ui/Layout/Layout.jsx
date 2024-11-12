import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';
import SocialList from '../SocialList/SocialList';

const Layout = ({ isMobile }) => {
  return (
    <main className="glassy w-full max-w-[1240px] lg:w-[85%] min-h-svh sm:min-h-[95svh] sm:border sm:border-glassyedge sm:mx-4 p-8 sm:p-10 lg:px-16 rounded-lg bg-primarybg relative">
      <SocialList className="absolute left-8 top-8"/>
      <Sidebar isMobile={isMobile} />
      <Outlet />
    </main>
  );
};

export default Layout;
