import React from "react";
import wishlist from "../assets/wishlist.png";
import console from "../assets/flash sales items/console.png";
import Ratings from "./Ratings";
import items from "./SalesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SalesItem = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider className="" {...settings}>
        {items.map((e) => {
          return (
            <div className="flex px-2">
              <div className="h-fit">
                {/* item image */}
                <div className="relative h-[250px] bg-[#F5F5F5] grid place-content-center">
                  <nav className="flex justify-between absolute w-full top-0 px-1 py-1">
                    <p className="bg-[#DB4444] px-3 rounded-md text-white w-fit font-extralight text-[14px] flex justify-center items-center">
                      {e.discount}
                    </p>
                    <img
                      className="py-1 px-1 rounded-full bg-white"
                      src={wishlist}
                      alt=""
                    />
                  </nav>
                  <img className="w-[8rem]" src={e.img} alt="" />
                </div>
                {/* item description */}
                <div className="leading-7 mt-2">
                  {/* name */}
                  <p className="font-poppins font-medium text-[16px]">
                    {e.name}
                  </p>
                  {/* price */}
                  <p className="flex gap-2">
                    <span className="font-medium text-[#DB4444] text-[16px]">
                      {e.newprice}
                    </span>
                    <span className="text-zinc-600 line-through">
                      {e.oldprice}
                    </span>
                  </p>
                  <Ratings rating={parseInt(e.stars)} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SalesItem;
