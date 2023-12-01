"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

interface ActionButtonProps {
  content: string;
  style?: string;
  scrollTo: string;
}

function ActionButton({ content, style, scrollTo }: ActionButtonProps) {
  return (
    <ScrollLink
      activeClass="active"
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={` ${style} md:flex-center group cursor-pointer  gap-3 rounded-full bg-primary-300 px-4 py-[10px] text-base font-normal leading-[19px] tracking-m4 hover:bg-primary-200 hover:text-primary-300`}
    >
      {content}
      <span className="flex-center h-[14px] w-[14px] rounded-full bg-primary-200 text-primary-200 group-hover:bg-primary-300">
        <svg className="fill-current stroke-current" width={8} height={9}>
          <use href={`assets/icons/icons.svg#arrow-down`}></use>
        </svg>
      </span>
    </ScrollLink>
  );
}

export default ActionButton;
