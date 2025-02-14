import { useState, createContext } from 'react';

const INITIAL_STATE = {
  currentSection: 5,
  doSmoothScroll: true,
  mainSectionWidth: 0,
};

const HomeContext = createContext(INITIAL_STATE);

export const HomeContextProvider = ({ children }) => {
  const [homeCtx, setHomeCtx] = useState(INITIAL_STATE);

  return <HomeContext.Provider value={{ homeCtx, setHomeCtx }}>{children}</HomeContext.Provider>;
};

export default HomeContext;
