import React from "react";
import { Button } from "@/components/ui/button";

function GetInTouch() {
  return (
    <Button
      className=" md:flex-center group hidden gap-3 rounded-full bg-primary-300 px-4 py-[10px] 
    text-base font-normal leading-[19px] tracking-m4 hover:bg-primary-200 hover:text-primary-300 "
    >
      Get In Touch
      <span
        className="flex-center h-[14px] w-[14px] rounded-full bg-primary-200
       text-primary-200 group-hover:bg-primary-300  "
      >
        <svg className="fill-current stroke-current" width={8} height={9}>
          <use href={`assets/icons/icons.svg#arrow-down`}></use>
        </svg>
      </span>
    </Button>
  );
}

export default GetInTouch;
