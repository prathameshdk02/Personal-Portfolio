import { useEffect } from "react";

export const useDebounce = (cb, ms) => {
  let timer = null;

  const debounceFunc = (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, ms);
  };

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  return debounceFunc;
};
