import React, { useContext } from "react";

import LoaderContext from "../context/LoaderContext";

const Bio = () => {
  const { loaderState, setLoaderState } = useContext(LoaderContext);
  console.log(loaderState);
  return (
    <section className="page-section text-white pt-32">
      <h2>This is my Bio</h2>
      <h2>{loaderState.isVisible.toString()}</h2>
    </section>
  );
};

export default Bio;
