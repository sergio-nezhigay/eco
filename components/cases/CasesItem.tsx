import React from "react";
import Image from "next/image";
import { ICases } from "@/types";

import { Separator } from "../ui/separator";

export default function CasesItem({
  title,
  description,
  date,
  imgTag,
}: ICases) {
  return (
    <div className="group flex h-[318px] cursor-pointer flex-col bg-primary-500 md:h-[322px] lg:h-[506px]">
      <div className="relative h-[168px] lg:h-[296px]">
        <Image
          src={`/assets/images/${imgTag}.jpg`}
          fill
          alt={imgTag}
          objectFit="cover"
        />
      </div>
      <div className=" flex  grow flex-col justify-between px-3 pb-3 pt-6 lg:px-12 lg:py-9">
        <div className="flex justify-between">
          <p className="paragraph-larger w-[175px] text-justify md:w-[194px] lg:w-[360px]">
            {title}
          </p>
          <div className="flex-center h-[60px] w-[60px] rounded-full bg-primary-300 group-hover:bg-primary-200">
            <svg className="h-7 w-7 rotate-[-45deg] fill-transparent stroke-current group-hover:stroke-primary-300">
              <use href="assets/icons/icons.svg#arrow-right"></use>
            </svg>
          </div>
        </div>
        <div className="flex grow flex-col justify-end">
          <Separator className=" mb-3 bg-primary-300 lg:mb-6 " />
          <div className="paragraph-smallest flex items-center justify-between">
            <p>{description}</p>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
