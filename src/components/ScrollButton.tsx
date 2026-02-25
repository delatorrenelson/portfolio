import React, { useState, useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="btn btn-primary btn-circle fixed bottom-8 right-8 shadow-2xl z-50 animate-bounce"
      id="btn-back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
