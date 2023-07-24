import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const images = [
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a2d69109e6ce150.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ec99b461d4e3de8.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a2d69109e6ce150.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ec99b461d4e3de8.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a2d69109e6ce150.jpg?q=20',
  'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0ec99b461d4e3de8.jpg?q=20',
  // Add more image URLs here
];

const Sliderimage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 3 images at once
    slidesToScroll: 3, // Scroll 3 images at a time
    initialSlide: 0,
  };

  return (
    <div className="w-[80%] mt-[14px]">
      <div className="">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img className='w-[300px] h-[300px]' src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliderimage;
