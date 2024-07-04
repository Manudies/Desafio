import React from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-button" onClick={scrollToTop}>
      Back to top
    </div>
  );
};

export default ScrollButton;