import React, { useState } from "react";

const GenericCrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="image-container flex">
        <div className="w-[45px] h-[250px]" onClick={prevSlide}></div>
        <img className="w-[80%] m-auto h-[220px]" src={images[currentIndex]} />
        <div className="w-[45px] h-[250px]"onClick={nextSlide}></div>
      </div>
    </div>
  );
};

export default GenericCrousel;
