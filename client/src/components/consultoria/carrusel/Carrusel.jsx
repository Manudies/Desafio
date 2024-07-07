import { useState, useEffect } from 'react';
import './Carrusel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: "consultoria/carrusel/carrusel1.png",
      alt: "imagen 0"
    },
    {
      src: "consultoria/carrusel/carrusel2.png",
      alt: "imagen 1"
    },
    {
      src: "consultoria/carrusel/carrusel3.png",
      alt: "imagen 2"
    },
    {
      src: "consultoria/carrusel/carrusel4.png",
      alt: "imagen 3"
    },
    {
      src: "consultoria/carrusel/carrusel5.png",
      alt: "imagen 4"
    },
    {
      src: "consultoria/carrusel/carrusel6.png",
      alt: "imagen 5"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carouselImg-container">
      <div className="carouselImg-slide" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="carouselImg-item">
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </div>

      <div className="carouselImg-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
