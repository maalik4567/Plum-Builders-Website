import React from 'react';
import "../../app/globals.css";

export default function IntroSection() {
  return (
    <section className="intro-section">
      <img
        src="./images/final image.jpg"
        alt="Luxury Kitchen"
        className="img-fluid w-100"
      />
      <div className="intro-content">
        <h1 className="intro-title">ENJOY EVERYDAY LUXURY</h1>
        <p className="intro-description">
          It's never been easier to design and achieve your ideal outcome.
        </p>
        <a href="#quote" className="btn-custom">
          REQUEST A QUOTE
        </a>
      </div>
    </section>
  );
}
