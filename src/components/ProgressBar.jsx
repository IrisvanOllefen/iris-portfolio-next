import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function ProgressBar({ rating }) {
  const [wasInView, setWasInView] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    if (inView && !wasInView) {
      setWasInView(true);
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="flex bg-purple-50  w-full h-6 shadow-inner rounded-2xl"
    >
      <div
        className={`bg-purple-700 inline-block w-${rating}/12 z-10 shadow-2xl rounded-tl-2xl rounded-bl-2xl transform ${
          wasInView ? "animate-move" : ""
        }`}
      ></div>
    </div>
  );
}
