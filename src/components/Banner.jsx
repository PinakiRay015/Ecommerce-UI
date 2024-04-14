import React from "react";
import iphone1 from "../assets/iphone1.png";
import appleLogo from "../assets/appleLogo.png";
import rightArrowWhite from "../assets/rightArrowWhite.png";
const Banner = () => {
  return (
    <div className="lg:w-[892px] sm:h-[344px] bg-black flex justify-between mt-10 sm:px-[66px] px-[5px]">
      <div className="mt-[58px]">
        <div className="flex items-center sm:gap-[24px] gap-[10px]">
          <img
            className="w-[1.2rem] sm:w-[2rem] md:w-[2.8rem]"
            src={appleLogo}
            alt=""
          />
          <p className="font-poppins text-white font-extralight sm:text-[16px] text-[12px]">
            iPhone 14 Series
          </p>
        </div>
        <div className="mt-5">
          <p className="font-inter sm:w-[14.5rem] md:w-[20rem] w-[9rem] font-semibold md:text-[48px] sm:text-[35px] text-[20px] text-white leading-[30px] sm:leading-[60px]">
            Up to 10% off Voucher
          </p>
        </div>
        <div className="flex gap-1 mt-5">
          <button className="text-white font-poppins font-medium sm:text-[16px] text-[12px] border-b">
            Shop Now
          </button>
          <img src={rightArrowWhite} alt="" />
        </div>
      </div>
      <img
        className="sm:w-[18rem] md:w-[22rem] w-[12rem] h-[16rem] sm:h-auto"
        src={iphone1}
        alt=""
      />
    </div>
  );
};

export default Banner;
