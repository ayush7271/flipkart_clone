import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import data from "../../data/data.json";
import data1 from "../../data/product.json";
import { useNavigate } from "react-router-dom";

const images = [
  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg ",
  // Add more image URLs here
];
// console.log(data1);

const Sliderimage = () => {
  const obj = {};
  let str = data1?.products;
  for (let i in str) {
    let char = str[i].category;
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  console.log(obj);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 3 images at once
    slidesToScroll: 3, // Scroll 3 images at a time
    initialSlide: 0,
  };
  const navigate = useNavigate();
  const handleClick=(e)=>{
    navigate(`/product/${e}`)
  }
  return (
    <div className="flex h-[400px] m-auto w-[99%]">
      <div className="w-[82%] mt-[14px]">
        <div className="">
          <div className="w-[100%] h-[85px] bg-[#FFFFFF]"></div>
          <Slider {...settings}>
            {data?.map((data, index) => (
              <div onClick={()=>handleClick(data?.category)}
                key={index}
                className="w-[300px] h-[300px] bg-[] ml-[10px] border"
              >
                <div className="w-[100%] h-[200px] mt-[10px]">
                  <img
                    className="w-[80%] m-auto h-[100%]"
                    src={data.image}
                    alt={`Image ${index + 1}`}
                  />
                </div>
                <div className="w-[100%] h-[60px] ">
                  <p className="w-[100%] m-auto text-[15px] text-center">
                    {data?.title}
                  </p>
                  <p className=" w-[10%] m-auto">{data?.price}</p>
                </div>
                {/* <img
                  className="w-[100%] h-[100%]"
                  src={image}
                  alt={`Image ${index + 1}`}
                /> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="w-[18%] h-[400px]">
        <div className="w-[90%] m-auto h-[400px]">
          <img
            className="w-[100%] h-[100%]"
            src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/2ccb3868386b6c4a.jpg?q=20"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sliderimage;
