"use client";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Icon from "../ui/Icon";
import { PrimaryButtonProps } from "@/types";

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
        isHiddenInMobile ? "hidden" : "flex-center"
      } md:flex-center group w-fit cursor-pointer  gap-3 rounded-full bg-primary-300 px-4 py-[10px] text-base font-normal leading-[19px] tracking-m4 transition hover:bg-primary-200 hover:text-primary-300 focus:bg-primary-200 focus:text-primary-300 `}
    >
      {content}
      <span className="flex-center h-[14px] w-[14px] rounded-full bg-primary-200 text-primary-200 transition group-hover:bg-primary-300 group-focus:bg-primary-300">
        <Icon name="arrow-down" style="fill-current stroke-current" />
      </span>
    </ScrollLink>
  );
}

export default PrimaryButton;
