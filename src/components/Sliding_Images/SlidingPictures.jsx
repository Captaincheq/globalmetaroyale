import React, { useState, useEffect } from "react";
import "./SlidingPictures.scss";

const SlidingPictures = ({ images, autoplayDelay = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    // Autoplay functionality
    const autoplayInterval = setInterval(handleNext, autoplayDelay);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentIndex]); // Restart autoplay when currentIndex changes

  return (
    <div className="sliding-pictures-container">
      <img className="pictures" src={images[currentIndex]} alt="Sliding Picture" />
       <div className="slide-buttons">
          <button className="prev-button fa fa-chevron-left fa-3x" aria-hidden="true" onClick={handlePrev}>
           
          </button>
          <button className="next-button" onClick={handleNext}>
            
          </button>
       </div> 
    </div>
  );
};

export default SlidingPictures;
