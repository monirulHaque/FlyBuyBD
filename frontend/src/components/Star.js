import React from "react";

const Star = ({ value, index, color }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={
          value >= index
            ? "fas fa-star"
            : value >= index - 0.5
            ? "fas fa-star-half-alt"
            : "far fa-star"
        }
      ></i>
    </span>
  );
};

Star.defaultProps = {
  color: "#ffcc00",
};

export default Star;
