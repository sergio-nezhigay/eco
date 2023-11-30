import React from "react";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  style?: string;
}

function Icon({ name, width = 24, height = 24, style }: IconProps) {
  return (
    <svg className={style} width={width} height={height}>
      <use href={`assets/icons/icons.svg#${name}`}></use>
    </svg>
  );
}

export default Icon;
