import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.pageYOffset > 800 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      toggleVisibility();
    });
  }, []);

  return (
    <>
      <div
        className={` ${
          isVisible ? `block` : `hidden`
        } fixed bottom-8 right-2 md:bottom-16 md:right-8 bg-white h-10 w-10 md:h-12 md:w-12 flex justify-center items-center rounded-full shadow cursor-pointer ring-1 ring-gray-400 ring-opacity-5`}
        onClick={() => scrollToTop()}
      >
        <svg
          className="fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -7.5 24 24"
          width="24"
          height="24"
          preserveAspectRatio="xMinYMin"
        >
          <path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"></path>
        </svg>
      </div>
    </>
  );
}
