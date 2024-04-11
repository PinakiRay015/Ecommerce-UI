import React from "react";
import search from "../assets/search.png";
import cart from "../assets/Cart.png";
import wishlist from "../assets/wishlist.png";
const Navbar = () => {
  return (
    <div className="w-full h-16 border-b">
      <div className="h-full max-w-screen-xl m-auto flex items-center justify-between">
        <p className="font-inter text-[24px] font-bold">Exclusive</p>

        {/* navbar  */}
        <nav className="flex gap-[48px] ml-[10rem]">
          <li className="list-none font-poppins text-[16px] cursor-pointer">Home</li>
          <li className="list-none font-poppins text-[16px] cursor-pointer">Contact</li>
          <li className="list-none font-poppins text-[16px] cursor-pointer">About</li>
          <li className="list-none font-poppins text-[16px] cursor-pointer">Sign Up</li>
        </nav>

        {/* search bar  */}
        <div className=" w-[347px] h-[38px] flex items-center justify-between">
          <div className="flex items-center w-[223px] h-full bg-[#dddcdc] justify-between rounded-sm py-[7px] px-[8px]">
            <input
              type="text"
              className="w-full bg-transparent h-full outline-none font-poppins text-[14px] placeholder-black font-light"
              placeholder="what are you looking for?"
            />
            <img className="cursor-pointer" src={search} alt="" />
          </div>
          <img className="cursor-pointer" src={wishlist} alt="" />
          <img className="cursor-pointer" src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
