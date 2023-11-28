import React from "react";

function Icon({
  name,
  width,
  height,
  strokeColor,
}: {
  name: string;
  width: number;
  height: number;
  strokeColor: string;
}) {
  return (
    <svg className="fill-current stroke-current" width={width} height={height}>
      <use href={`assets/icons/icons.svg#${name}`}></use>
    </svg>
  );
}

export default Icon;
