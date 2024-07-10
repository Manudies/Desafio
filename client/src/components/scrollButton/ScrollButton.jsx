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
      VOLVER ARRIBA
    </div>
  );
};

export default ScrollButton;