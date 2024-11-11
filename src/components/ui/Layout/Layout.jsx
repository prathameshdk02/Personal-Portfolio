import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ isMobile }) => {
  return (
    <main className="glassy w-full md:w-[85%] min-h-svh max-w-[1200px] sm:min-h-[95svh] sm:border sm:border-glassyedge  sm:mx-4 p-6 sm:p-10 rounded-lg bg-primarybg relative">
      <Sidebar isMobile={isMobile} />
      <Outlet />
    </main>
  );
};

export default Layout;
