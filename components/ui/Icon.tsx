import React from "react";

function Icon({
  name,
  width,
  height,
}: {
  name: string;
  width: number;
  height: number;
}) {
  return (
    <svg className="icon" width={width} height={height}>
      <use href={`assets/icons/icons.svg#${name}`}></use>
    </svg>
  );
}

export default Icon;
