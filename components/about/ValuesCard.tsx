import React from "react";
import { ICard } from "@/types";
import { Separator } from "../ui/separator";

function ValuesCard({ description, iconId, title }: ICard) {
  return (
    <div
      key={iconId}
      className="col-span-2 min-h-[197px] bg-primary-500 p-3 md:col-span-1 lg:min-h-[339px] lg:px-6 lg:py-12"
    >
      <div className="mb-[33px] flex items-center gap-2 md:mb-[51px] lg:mb-[94px]">
        <svg className="h-4 w-4 fill-transparent stroke-primary-200 lg:h-6 lg:w-6">
          <use href={`assets/icons/icons.svg#${iconId}`}></use>
        </svg>
        <h3 className="h3-base uppercase">{title}</h3>
      </div>
      <Separator className="mb-3 bg-primary-300 lg:mb-6" />
      <p className="paragraph-small text-justify">{description}</p>
    </div>
  );
}

export default ValuesCard;
