import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import "./construction.css";

const ConstructionPage = () => {
  const images = [
    "/images/construction/1.JPG",
    "/images/construction/2.JPG",
    "/images/construction/3.JPG",
    "/images/construction/4.JPG",
    "/images/construction/5.JPG",
    "/images/construction/6.JPG",
    "/images/construction/7.JPG",
    "/images/construction/8.JPG",
    "/images/construction/9.JPG",
    "/images/construction/10.JPG",
    "/images/construction/11.JPG",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }

    setTouchStart(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="construction-main">
      <div className="constructionPageWrapper">
        <div className="constructionHeader">
          <h1>Construction</h1>
          <h2>
            Let us rise up and <span id="highlight">build</span>
          </h2>
        </div>
        <div 
          className="slideshow-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slideshow-image"
          />
          <button className="slideshow-button prev" onClick={handlePrevious}>
            &#10094;
          </button>
          <button className="slideshow-button next" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </main>
  );
};

const Construction = () => {
  return (
    <>
      <ConstructionPage />
      <Footer />
    </>
  );
};

export default Construction;