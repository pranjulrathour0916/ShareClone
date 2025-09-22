import { useState, useEffect } from "react";

const PageWrapper = ({ children }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
