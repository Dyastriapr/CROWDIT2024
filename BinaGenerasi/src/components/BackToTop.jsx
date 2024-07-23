import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the user lands on a scrolled page
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    const scrollDuration = 500; // Duration of the scroll animation in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const smoothScroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(smoothScroll);
      }
    };
    requestAnimationFrame(smoothScroll);
  };

  return (
    showTopBtn && (
      <button
        onClick={goToTop}
        className="hidden md:block fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 p-3 bg-primary text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out md:p-4"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 md:h-4 md:w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    )
  );
}

export default BackToTop;
