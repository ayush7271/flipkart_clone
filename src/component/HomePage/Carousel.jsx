import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const images = [
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a2d69109e6ce150.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ec99b461d4e3de8.jpg?q=20',
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 3000, // Set the time between slides in milliseconds
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className='bg-[red]'>
              <img className='w-[100%]' src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
