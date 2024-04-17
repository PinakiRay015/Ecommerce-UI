import React, { useState } from "react";
import Slider from "react-slick";
import wishlist from "../assets/wishlist.png";
import Ratings from "./Ratings";
import myBestItems from "./Cards/BestItemCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BestItems = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  const showCart = (index) => {
    setHoveredCardIndex(index);
  };

  const hideCart = () => {
    setHoveredCardIndex(null);
  };

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
          initialSlide: 2,
        },
      },
      {
        breakpoint: 615,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider className="" {...settings}>
        {myBestItems.map((e, index) => {
          return (
            <div className="flex px-2" key={index}>
              <div className="h-fit">
                {/* item image */}
                <div
                  onMouseOver={() => showCart(index)}
                  onMouseLeave={hideCart}
                  className="relative h-[250px] bg-[#F5F5F5] grid place-content-center"
                >
                  <nav className="flex justify-between absolute w-full top-0 px-1 py-1 z-8">
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
                  <footer
                    className={`absolute ${
                      hoveredCardIndex === index ? "h-[41px]" : "h-[0px]"
                    } bg-black w-full bottom-0 text-white flex justify-center items-center h-[41px] transition-all duration-200 ease-in-out`}
                  >
                    <p className="text-[16px] font-poppins">Add to cart</p>
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

export default BestItems;
