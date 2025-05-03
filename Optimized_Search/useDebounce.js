import React, { useEffect } from "react";

export default useDebounce = (cb, delay) => {
  let timer;
  const debounce = (...arg) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...arg);
    }, delay);
  };
  useEffect(() => {
    if (timer) clearTimeout(timer);
  }, []);

  return debounce;
};
