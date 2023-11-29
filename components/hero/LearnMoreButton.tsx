import React from "react";
import { Button } from "@/components/ui/button";

function LearnMoreButton() {
  return (
    <Button className=" md:flex-center mx-auto flex gap-3  rounded-full border border-primary-300 bg-white py-[10px] pl-4 pr-1 text-base font-normal leading-[18px] tracking-m4 hover:bg-primary-200 hover:text-primary-300 md:ml-0">
      Learn more
      <span className="flex-center h-[32px] w-[32px] rounded-full  bg-primary-300 text-primary-200 hover:border-none">
        <svg
          className="-rotate-90 fill-current stroke-current"
          width={16}
          height={16}
        >
          <use href={`assets/icons/icons.svg#arrow-down`}></use>
        </svg>
      </span>
    </Button>
  );
}

export default LearnMoreButton;