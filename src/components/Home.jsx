import React from "react";
import Categories from "./Categories";
import Banner from "./Banner";
import FlashSales from "./FlashSales";
import SalesItem from "./SalesItem";
const Home = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-auto">
        <div className="flex justify-between">
          <Categories />
          <Banner />
        </div>
        <FlashSales/>
        <SalesItem/>
      </div>
    </div>
  );
};

export default Home;
