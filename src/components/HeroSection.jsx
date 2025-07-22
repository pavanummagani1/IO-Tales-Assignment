import React, { useState } from 'react';

const slides = [
{
  title: 'FASHION FORWARD',
  subtitle: 'STYLE THAT DEFINES YOU',
  desc: 'Discover the latest trends in fashion designed to elevate your everyday look. From timeless classics to bold new arrivals, find outfits that match your personality and make a statement wherever you go.',
  btnText: 'SHOP NOW',
},
  {
    title: 'KIDS COLLECTION',
    subtitle: 'SUMMER SALE',
    desc: 'Get the best outfits for your little ones. Trendy, comfy and colorful.',
    btnText: 'EXPLORE NOW',
  },
  {
    title: 'NEW ARRIVALS',
    subtitle: 'LIMITED EDITION',
    desc: 'Fresh styles just landed! Discover the latest in kids fashion.',
    btnText: 'SEE MORE',
  },
];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
          key={index}
        >
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <h1 className="hero-title hero-title-secondary">{slide.subtitle}</h1>
            <p className="hero-subtitle">{slide.desc}</p>
            <button className="shop-btn">{slide.btnText}</button>
          </div>
        </div>
      ))}

      {/* Custom Arrows */}
      <button className="hero-arrow prev" onClick={handlePrev}>
        <span>&larr;</span>
      </button>
      <button className="hero-arrow next" onClick={handleNext}>
        <span>&rarr;</span>
      </button>
    </div>
  );
};

export default HeroCarousel;
