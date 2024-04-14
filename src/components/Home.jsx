import React from "react";
import Categories from "./Categories";
import Banner from "./Banner";
import FlashSales from "./FlashSales";
import MainCategory from "./MainCategory";
const Home = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-auto px-3">
        <div className="lg:flex justify-between">
          <Categories />
          <Banner />
        </div>
        <FlashSales/>
        <MainCategory/>
      </div>
    </div>
  );
};

export default Home;
