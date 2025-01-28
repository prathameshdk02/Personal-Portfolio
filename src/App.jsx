import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDebounce } from './hooks/useDebounce';
import { HomeContextProvider } from './context/HomeContext';

import Layout from './components/ui/Layout/Layout';
import Home from './pages/Home';
import BubbleSidebar from './components/ui/BubbleSidebar/BubbleSidebar';

const MOBILE_BREAKPOINT = 768;

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  const handleResize = useDebounce(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, 400);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <>
      <HomeContextProvider>
        <Layout isMobile={isMobile}>
          <Home />
        </Layout>
        <BubbleSidebar />
      </HomeContextProvider>
    </>
  );
}

export default App;
