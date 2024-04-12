import React from "react";
import yellowstar from "../assets/yellowstar.png";
import blackstar from "../assets/blackstar.png";
const Ratings = ({rating}) => {
  return (
    <div>
      {[...Array(rating)].map(() => (
        <img className="inline-block" src={yellowstar} alt="" />
      ))}

{[...Array(5-rating)].map(() => (
        <img className="inline-block" src={blackstar} alt="" />
      ))}
    </div>
  );
};

export default Ratings;
