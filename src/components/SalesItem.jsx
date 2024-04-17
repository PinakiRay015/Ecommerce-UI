import React from "react";
import wishlist from "../assets/wishlist.png";
import Ratings from "./Ratings";
import items from "./Cards/SalesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SalesItem = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 755,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
                    <p className="bg-[#DB4444] px-3 rounded-lg text-white w-fit font-extralight text-[14px] flex justify-center items-center">
                      {e.discount}
                    </p>
                    <img
                      className="py-1 px-1 rounded-full bg-white"
                      src={wishlist}
                      alt=""
                    />
                  </nav>
                  <img className="w-[8rem]" src={e.img} alt="" />
                  <footer className="h-[41px] flex items-center justify-center bg-black bottom-0 absolute w-full">
                    <p className="text-white text-[16px] font-poppins">Add to cart</p>
                  </footer>
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
