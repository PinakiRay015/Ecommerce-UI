import React from "react";
import wishlist from "../assets/wishlist.png";
import Ratings from "./Ratings";
import items from "./SalesCard";

const SalesItem = () => {
  return (
    <div className="mt-5 flex justify-between">
      {items.map((e) => {
        return (
          <div>
            <div className="relative w-[270px] h-[250px] bg-[#F5F5F5] p-2 flex flex-col justify-center items-center">
              <div className="absolute top-0 px-1 py-1 flex items-center justify-between w-full">
                <p className="px-2 text-white rounded-md bg-[#DB4444] w-fit">
                  {e.discount}
                </p>
                <img
                  className="rounded-full bg-white p-1"
                  src={wishlist}
                  alt=""
                />
              </div>
              <img className="w-48" src={e.img} alt="" />
            </div>
            <div>{e.name}</div>
            <div>
              <span className="text-[#DB4444]">{e.newprice}</span>{" "}
              <span className="line-through text-gray-500">{e.oldprice}</span>
            </div>
            <div>
              <Ratings rating={parseInt(e.stars)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SalesItem;
