import React from "react";
import "../../assets/stylesheets/Clock.css";

const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};

export default StaticCard;
