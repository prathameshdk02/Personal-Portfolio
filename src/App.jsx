import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useDebounce } from './hooks/useDebounce';
import { HomeContextProvider } from './context/HomeContext';

import Layout from './components/ui/Layout/Layout';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Interests from './pages/Interests';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout isMobile={isMobile} />}>
              <Route index element={<Home isMobile={isMobile} />}></Route>
              <Route path="/bio" element={<Bio />}></Route>
              <Route path="/interests" element={<Interests />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/contact" element={<ContactMe />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </HomeContextProvider>
    </>
  );
}

export default App;
