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
      BACK TO TOP
    </div>
  );
};

export default ScrollButton;