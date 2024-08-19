"use client";
import React, { useState, useEffect } from "react";
import "../../app/globals.css";

const Journey = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardWidth = 360 + 25; // Card width + gap

  const slides = [
    { src: "/images/1.png", title: "Kitchen" },
    { src: "/images/bathroom.png", title: "Bathroom" },
    { src: "/images/FirePlace.png", title: "Fireplace" },
    { src: "/images/wallcladding.png", title: "Wall Cladding" },
    { src: "/images/Cubic.png", title: "Cubic" },
  ];

  const totalSlides = slides.length;

  // Adding clones for infinite looping effect
  const slidesWithClones = [
    slides[totalSlides - 1], // Clone of the last slide
    ...slides,
    slides[0], // Clone of the first slide
  ];

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsAnimating(false);

      // Adjust the current slide if we're on a clone to give the infinite effect
      if (currentSlide === 0) {
        setCurrentSlide(totalSlides);
      } else if (currentSlide === totalSlides + 1) {
        setCurrentSlide(1);
      }
    };

    const cardDeck = document.querySelector(".card-deck");
    cardDeck.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      cardDeck.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentSlide, totalSlides]);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleIndicatorClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index + 1);
    }
  };

  return (
    <div className="carousel-container">
      <h2 
        className="maintitle" 
        style={{
          fontWeight: 900, 
          fontSize: '2rem', 
          color: '#555',
          textTransform: 'uppercase', 
          letterSpacing: '2px',
        }}
      >
        START YOUR JOURNEY
      </h2>
      <p>What type of project do you have?</p>
      
      <div className="carousel-inner">
        <div
          className="card-deck"
          style={{
            transform: `translateX(-${currentSlide * cardWidth}px)`,
            transition: isAnimating ? "transform 0.3s ease-in-out" : "none",
            width: `${(totalSlides + 2) * cardWidth}px`,
            display: "flex",
          }}
        >
          {slidesWithClones.map((slide, index) => (
            <div className="card" key={index}>
              <img src={slide.src} className="card-img-top" alt={slide.title} />
              <div className="card-body">
                <h5 className="card-title">{slide.title}</h5>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" onClick={handlePrev}>
          ❮ PREV
        </button>
        <button className="carousel-button next" onClick={handleNext}>
          NEXT ❯
        </button>
      </div>

      <div className="shopcarousel-indicators">
        <button
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide-to="2"
        ></button>
        <button
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide-to="3"
        ></button>
        <button
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide-to="4"
        ></button>
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index + 1 ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
