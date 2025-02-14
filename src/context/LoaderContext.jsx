import React, { createContext, useState } from "react";

const LoaderContext = createContext({ isVisible: false });

export const LoaderContextProvider = ({ children }) => {
  const [loaderState, setLoaderState] = useState({ isVisible: false });

  return (
    <LoaderContext.Provider value={{ loaderState, setLoaderState }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContext;
