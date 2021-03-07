import React from "react";
import classNames from "classnames";

const GridCell = ({ borders, index }) => {
  //conditionally renders borders around cell based on borders prop
  const bordersClass = classNames({
    "Grid-cell": true,
    "border-east": borders.includes("east"),
    "border-west": borders.includes("west"),
    "border-north": borders.includes("north"),
    "border-south": borders.includes("south"),
  });

  return <div className={bordersClass}></div>;
};

export default GridCell;
