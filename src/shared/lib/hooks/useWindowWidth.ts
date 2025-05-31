import { useLayoutEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(() => document.documentElement.clientWidth);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => setWidth(document.documentElement.clientWidth));

    observer.observe(document.documentElement);

    return () => observer.unobserve(document.documentElement);
  }, []);

  return width;
};
