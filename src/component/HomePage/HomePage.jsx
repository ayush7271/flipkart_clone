import { Route, Routes } from "react-router-dom";
import Carousel from "./Carousel";

export const Homepage = () => {
  return (
    <div className="bg-[#f1f2f4] h-screen pt-[65px]">
      <div className="w-[97%] m-auto bg-[#ffffff]" >
        <div className="w-[90%] h-[140px] m-auto flex justify-between text-center pt-[15px] ">
          <div className="w-[94px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              {" "}
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                alt=""
              />
            </div>
            <div>Grocery</div>
          </div>
          <div className="w-[80px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
                alt=""
              />
            </div>
            <div>Mobiles</div>
          </div>
          <div className="w-[80px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100"
                alt=""
              />
            </div>
            <div>Fashion</div>
          </div>
          <div className="w-[100px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                alt=""
              />
            </div>
            <div>Electronics</div>
          </div>
          <div className="w-[137px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                alt=""
              />
            </div>
            <div>Home & Furniture</div>
          </div>
          <div className="w-[84px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
                alt=""
              />
            </div>
            <div>Appliances</div>
          </div>
          <div className="w-[80px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100 "
                alt=""
              />
            </div>
            <div>Travel</div>
          </div>
          <div className="w-[80px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
                alt=""
              />
            </div>
            <div>Top Offers</div>
          </div>
          <div className="w-[136px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
                alt=""
              />
            </div>
            <div>Beauty, Toys & more</div>
          </div>
          <div className="w-[132px] h-[113px]">
            <div className="w-[64px] h-[64px] m-auto">
              <img
                className="w-[64px] h-[64px]"
                src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
                alt=""
              />
            </div>
            <div>Two Wheelers</div>
          </div>
        </div>
      </div>
      <Carousel/>
    </div>
  );
};
