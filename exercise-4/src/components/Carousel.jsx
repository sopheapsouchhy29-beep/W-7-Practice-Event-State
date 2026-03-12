import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to use state to manage the current image */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* You will need to handle the click on left and right button */
  function goToPrevious() {
    /* You will need to manage the cases when we are on the last image or first image*/
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    /* You will need to manage the cases when we are on the last image or first image*/
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill 
        className="arrow arrow-left" 
        onClick={goToPrevious}
      />

      {/* You will need to display the current image, not the first one.. */}
      <img 
        src={images[currentIndex].src} 
        alt={images[currentIndex].alt} 
        className="slide" 
      />

      <BsArrowRightCircleFill 
        className="arrow arrow-right" 
        onClick={goToNext}
      />
    </div>
  );
};