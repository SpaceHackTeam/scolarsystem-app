import React from "react";
import "../../assets/stylesheets/Clock.css";

const AnimatedCard = ({ animation, digit }) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard;
