"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Icon from "../ui/Icon";

interface PrimaryButtonProps {
  content: string;
  isHiddenInMobile?: true;
  scrollTo: string;
}

function PrimaryButton({
  content,
  isHiddenInMobile,
  scrollTo,
}: PrimaryButtonProps) {
  return (
    <ScrollLink
      activeClass="active"
      href={`/#${scrollTo}`}
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={-110}
      duration={500}
      tabIndex={0}
      className={` ${
        isHiddenInMobile ? "hidden" : "flex"
      } md:flex-center group cursor-pointer  gap-3 rounded-full bg-primary-300 px-4 py-[10px] text-base font-normal leading-[19px] tracking-m4 hover:bg-primary-200 hover:text-primary-300 `}
    >
      {content}
      <span className="flex-center h-[14px] w-[14px] rounded-full bg-primary-200 text-primary-200 group-hover:bg-primary-300">
        <Icon name="arrow-down" style="fill-current stroke-current" />
      </span>
    </ScrollLink>
  );
}

export default PrimaryButton;
