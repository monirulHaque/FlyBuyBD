import React from "react";
import Star from "./Star";

const Rating = ({ value, text }) => {
  let i = 0,
    len = 5,
    stars = [];
  while (++i <= len) stars.push(<Star value={value} index={i} />);

  return (
    <div className="rating">
      {stars}
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
