import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useDebounce } from "./hooks/useDebounce";
import { HomeContextProvider } from "./context/HomeContext";

import Layout from "./components/ui/Layout/Layout";
import Home from "./pages/Home";
import BubbleSidebar from "./components/ui/BubbleSidebar/BubbleSidebar";

const MOBILE_BREAKPOINT = 768;

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

  const handleResize = useDebounce((e) => {
    setInnerWidth(window.innerWidth);
  }, 400);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);

  return (
    <>
      <HomeContextProvider>
        <Layout innerWidth={innerWidth}>
          <Home innerWidth={innerWidth} />
        </Layout>
        <BubbleSidebar innerWidth={innerWidth} />
      </HomeContextProvider>
    </>
  );
}

export default App;
