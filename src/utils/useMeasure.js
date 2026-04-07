import { useLayoutEffect, useRef, useState } from "react";

export default function useMeasure() {
  const ref = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!ref.current || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(([entry]) => {
      setBounds(entry.contentRect);
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []); // no external 'ro' referenced, so empty deps is correct

  return [ref, bounds];
}
