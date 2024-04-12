import React from "react";
import miniArrow from "../assets/miniArrowRightBlack.png";
const Categories = () => {
  return (
    <div className="border-r w-[290px] flex flex-col justify-between font-poppins font-light">
      <a className="flex justify-between items-center pr-4" href="/women">
        <li className="list-none hover:font-normal">Women's Fashion</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/men">
        <li className="list-none hover:font-normal">Men's Fashion</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/women">
        <li className="list-none hover:font-normal">Electronics</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/homeandlife">
        <li className="list-none hover:font-normal">Home & Lifestyle</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/medicine">
        <li className="list-none hover:font-normal">Medicine</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/sports">
        <li className="list-none hover:font-normal">Sports & Outdoor</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/baby">
        <li className="list-none hover:font-normal">Baby's & Toys</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/groceries">
        <li className="list-none hover:font-normal">Groceries & Pets</li>
        <img src={miniArrow} alt="" />
      </a>
      <a className="flex justify-between items-center pr-4" href="/health">
        <li className="list-none hover:font-normal">Health & Beauty</li>
        <img src={miniArrow} alt="" />
      </a>
    </div>
  );
};

export default Categories;
