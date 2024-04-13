import React from "react";
import yellostar from "../assets/yellowstar.png";
import blackstar from "../assets/blackstar.png";
const Ratings = ({rating}) => {
  return (
    <div className="flex">
        {[...Array(rating)].map(()=>{
            return(
                <img src={yellostar} alt="" />
            )
        })}

{[...Array(5-rating)].map(()=>{
            return(
                <img src={blackstar} alt="" />
            )
        })}
    </div>
  );
};

export default Ratings;
