import React from "react";
import miniArrow from "../assets/miniArrowRightBlack.png";
const Categories = () => {
  return (
    <div className="lg:border-r md:w-[290px] pt-10 hidden md:block">
      <div className="flex md:flex-col justify-between font-poppins font-light h-full">
        <a className="flex justify-between items-center pr-4" href="/women">
          <li className="list-none hover:font-normal text-[12px]">Women's Fashion</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/men">
          <li className="list-none hover:font-normal text-[12px]">Men's Fashion</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/women">
          <li className="list-none hover:font-normal text-[12px]">Electronics</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a
          className="flex justify-between items-center pr-4"
          href="/homeandlife"
        >
          <li className="list-none hover:font-normal text-[12px]">Home & Lifestyle</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/medicine">
          <li className="list-none hover:font-normal text-[12px]">Medicine</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/sports">
          <li className="list-none hover:font-normal text-[12px]">Sports & Outdoor</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/baby">
          <li className="list-none hover:font-normal text-[12px]">Baby's & Toys</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/groceries">
          <li className="list-none hover:font-normal text-[12px]">Groceries & Pets</li>
          <img className="" src={miniArrow} alt="" />
        </a>
        <a className="flex justify-between items-center pr-4" href="/health">
          <li className="list-none hover:font-normal text-[12px]">Health & Beauty</li>
          <img className="" src={miniArrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Categories;
