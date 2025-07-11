import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.pageYOffset > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-300 z-50 outline-none border-3 border-gray-200 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } md:bottom-8 md:right-8 md:w-12 md:h-12 sm:bottom-5 sm:right-5 sm:w-9 sm:h-9 xs:bottom-4 xs:right-4 xs:w-7 xs:h-7`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="text-2xl text-gray-800 md:text-2xl sm:text-xl xs:text-lg">↑</span>
    </button>
  );
};

export default ScrollToTopButton;