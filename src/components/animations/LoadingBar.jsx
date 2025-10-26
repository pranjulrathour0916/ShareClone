import React, { useEffect, useState } from "react";

const LoadingBar = ({ duration = 3000, color = "bg-blue-500" }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setProgress(0);
    setIsVisible(true)
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setIsVisible(false)
          return 100;
        }
        return old + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration]);

  if(!isVisible)
    return null

  return (
    <div className=" bg-gray-200 h-1 rounded overflow-hidden">
      <div
        className={`${color} h-1 rounded transition-all duration-100 ease-linear`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;
