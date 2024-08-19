"use client";
import React, { useState } from "react";
import "../../app/globals.css";

const Shop = () => {
  const materials = [
    { name: "Quartz", src1: "/images/8.Ranier.png", src2: "/images/btMarble.png" },
    { name: "Porcelain", src1: "/images/pr.jpg", src2: "/images/pr2.jpg" },
    { name: "Granite", src1: "/images/gr.jpg", src2: "/images/gr2.jpg" },
    { name: "Marble", src1: "/images/mr.jpg", src2: "/images/mr2.jpg" },
    { name: "Quartzite", src1: "/images/qzite.jpg", src2: "/images/qz2.jpg" },
    // Add more materials with their respective images if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === materials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? materials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="shop-container">
      <h2
        className="maintitle"
        style={{
          fontWeight: 900,
          fontSize: "2rem",
          color: "#555",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "10px",
          marginTop: "130px",
        }}
      >
        SHOP YOUR COUNTERTOP BY MATERIAL AND FUNCTION
      </h2>
      <p>Find the perfect stone and countertop for your home.</p>

      <div id="shopcarousel" className="shopcarousel slide">
        <div className="shopcarousel-inner">
          <div className="shopcarousel-item active">
            <img
              src={materials[currentIndex].src1}
              alt={materials[currentIndex].name}
              className="d-block transition-img"
            />
            <div className="shopcarousel-caption dropup-caption">
              <div className="dropdown dropup">
                <button
                  className="btn dropdown-toggle dropup-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  style={{
                    margin: "auto",
                    display: "block",
                    textTransform: "uppercase",
                    fontWeight: "800",
                  }}
                >
                  {materials[currentIndex].name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="shopcarousel-item">
            <img
              src={materials[currentIndex].src2}
              alt={materials[currentIndex].name}
              className="d-block transition-img"
            />
            <div className="shopcarousel-caption shop-material-caption">
              <button
                className="btn btn-light shop-btn"
                style={{
                  margin: "auto",
                  display: "block",
                  backgroundColor: "#ffffff",
                  textTransform: "uppercase",
                  fontWeight: "800",
                  color: "#555",
                }}
              >
                Shop Material
              </button>
            </div>
          </div>
        </div>

        <button
          className="shopcarousel-control-prev"
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide="prev"
          onClick={handlePrevClick}
        >
          <span
            className="shopcarousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span>❮ Prev</span>
        </button>

        <button
          className="shopcarousel-control-next"
          type="button"
          data-bs-target="#shopcarousel"
          data-bs-slide="next"
          onClick={handleNextClick}
        >
          <span
            className="shopcarousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span>Next ❯</span>
        </button>
      </div>

      <div className="shopcarousel-indicators">
        {materials.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#shopcarousel"
            data-bs-slide-to={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
