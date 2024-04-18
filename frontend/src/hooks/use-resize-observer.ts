import { useEffect, useState } from "react";

export const useResizeObserver = (element: HTMLElement | null) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (element.offsetWidth !== width) {
        setWidth(element.offsetWidth);
      }
      if (element.offsetHeight !== height) {
        setHeight(element.offsetHeight);
      }
    });

    resizeObserver.observe(element);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [element]);

  return {
    width,
    height,
  };
};
