import React, { useEffect, useState } from "react";
import data from "../../data/product.json";
import { useParams } from "react-router-dom";
import GenericCrousel from "../HomePage/GenericCrousel";
export const Product = () => {
  const param = useParams();
  const height = window.innerHeight;
  // console.log(data);
  // const [prodArray, setProdArray] = useState([]);
  const [id, setId] = useState(1);
  const [thumbnail, setthumbnail] = useState();

  const prod = [];
  useEffect(() => {
    if (data) {
      for (let i of data?.products) {
        if (i?.category == param?.product) {
          prod.push(i);
          // setProdArray([...prodArray, i]);
          // console.log(i,"sbsjhjsnj")
        }
      }
    }
  }, [data]);

  const state1 = data?.products;
  const [state, setstate] = useState("");
  useEffect(() => {
    {
      setstate(param.product);
    }
  }, [param]);
  useEffect(() => {
    {
      data?.products.filter((value) => {
        if (value.category.toLowerCase().includes(state?.toLowerCase())) {
          setthumbnail(value);
          return;
        }
      });
    }
  }, [state]);
  console.log(thumbnail);
  return (
    <div className="w-[100%] h-auto flex justify-between text-[black] pt-[75px]">
      {/* filter part */}
      <div className="w-[19.2%] h-auto bg-[#eff1f4]">
        {/* <p className='text-[black]'>{height} this is je </p> */}
        {/* upper sidebanner  */}
        <div className="w-[95%] h-[250px] m-auto">
          <div className="w-full h-[170px] bg-[#ffffff]">
            <img
              className="w-[full] h-full m-auto"
              src={thumbnail?.thumbnail}
              alt=""
            />
          </div>
          <div className="w-full h-[80px] bg-[#ffffff]">
            <p className="text-[20px] font-semibold pt-3 ml-3">
              {thumbnail?.category}
            </p>
            <p className="text-[12px] ml-3">Up to 80% off, Sale is Live{">"}</p>
          </div>
        </div>
        {/* filter */}
        <div>
          <div className="w-[95%] mt-2 m-auto h-[60px] bg-[#ffffff] flex items-center">
            <p className="text-[20px] font-semibold ml-3 ">Filters</p>
          </div>
          {/* <div className="w-[95%] mt-[2px] m-auto h-[200px] bg-[#867373]">
            category
          </div> */}
          {/* <div className="w-[95%] mt-[2px] m-auto h-[130px] bg-[#867373]">
            price
          </div> */}
          {/* <div className="w-[95%] mt-[2px] m-auto h-[70px] bg-[#867373]">
            superCoin
          </div> */}
          {/* <div className="w-[95%] mt-[2px] m-auto h-[70px] bg-[#867373]">
            superCoin Assure
          </div> */}
          <div className="w-[95%] mt-[2px] m-auto h-[70px] bg-[#867373]">
            Deliver in 1 day
          </div>
          <div className="w-[95%] mt-[2px] m-auto h-[200px] bg-[#867373]">  
            Brand
          </div>
          <div className="w-[95%] mt-[2px] m-auto h-[100px] bg-[#867373]">
            {" "}
            Customer rating
          </div>
          <div className="w-[95%] mt-[2px] m-auto h-[150px] bg-[#867373]">
            {" "}
            offer
          </div>
          <div className="w-[95%] mt-[2px] m-auto h-[60px] bg-[#867373]">
            {" "}
            Discount
          </div>
          <div className="w-[95%] mt-[2px] m-auto h-[60px] bg-[#867373]">
            {" "}
            GST INVOICE AVAILABLE
          </div>
          <div className="w-[95%] mt-[2px] m-auto h-[60px] bg-[#867373]">
            {" "}
            Availablity
          </div>
        </div>
      </div>
      {/* product part */}
      <div className="w-[81%] h-[900px]">
        {/* <div className="w-full bg-[#a8a1a1] h-[150px]"></div> */}
        <div className="w-full mt-[1px] h-auto grid grid-cols-4">
          {data?.products
            .filter((value) => {
              console.log(
                value.category.toLowerCase().includes(state?.toLowerCase())
              );
              if (state === "") {
                return value;
              } else if (
                value.category.toLowerCase().includes(state?.toLowerCase())
              ) {
                return value;
              }
              //  else if (
              //   value.category.toLowerCase().includes(state.toLowerCase())
              // ) {
              //   return value;
              // }
              //  else if (
              //   value.exp.toLowerCase().includes(state.toLowerCase())
              // ) {
              //   return value;
              // } else if (
              //   value.salary.toLowerCase().includes(state.toLowerCase())
              // ) {
              //   return value;
              // } else if (
              //   value.location.toLowerCase().includes(state.toLowerCase())
              // ) {
              //   return value;
              // }
            })

            .map((data) => (
              <div className="hover:border-[2px] border-grey-500 cursor-pointer">
                <div className="w-[300px] h-[500px] mb-3 m-auto">
                  <div className="w-[300px] h-[300px]">
                    <div className="w-[300px] h-[40px] bg-[#ffffff]"></div>
                    <GenericCrousel images={data.images} />
                    {/* <img className="w-[70%] m-auto h-[250px]"  src={data.images[0]} alt="" /> */}
                  </div>
                  <div className="ml-3 mt-[20px]">
                    <div className="opacity-30 text-[12px]">Sponsored</div>
                    <div>{data?.title}</div>

                    <div className="flex">
                      <div>rating</div>
                      <div className="ml-3">(16276)</div>
                      <div>
                        <img
                          className="w-[100px] ml-3"
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <div className="">
                        <p>₹{data.price}</p>
                      </div>
                      <del className="ml-3 opacity-40">₹{data.strike}</del>
                      <div className="ml-3 text-[green]">
                        {data?.discountPercentage}% off
                      </div>
                    </div>
                    <div className="text-[12px]">
                      No Cost EMI from ₹400/month
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
