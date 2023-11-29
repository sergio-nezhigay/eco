"use client";
import React, { useState } from "react";

import { CASES } from "@/constants";
import { Separator } from "@radix-ui/react-separator";
import CasesSwiper from "./CasesSwiper";

function Cases() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (swiper: {
    activeIndex: number;
    params: { slidesPerView: number };
  }) => {
    setCurrentSlide(swiper.activeIndex + swiper.params.slidesPerView);
  };

  const counter = (
    <p className="text-[28px] font-light leading-[33.6px] tracking-m4 md:basis-2/4 lg:pl-[137px]">
      {`${currentSlide.toString().padStart(2, "0")}`}
      <span className="opacity-25">{`/${CASES.length
        .toString()
        .padStart(2, "0")}`}</span>
    </p>
  );

  return (
    <section className="section-regular">
      <div className="container">
        <div className="mb-[19px] md:mb-[38px]  md:flex md:items-end md:gap-6 lg:gap-12">
          <div className="relative md:basis-2/4">
            <h2 className="h2-base mb-[63px] md:mb-0 md:max-w-[264px]  lg:max-w-[398px] ">
              Successful cases of our company
            </h2>
            <Separator
              orientation="vertical"
              className=" absolute -right-3 top-0 hidden w-[1px] bg-primary-300 md:block md:h-full lg:-right-6"
            />
          </div>
          {counter}
        </div>
        <CasesSwiper handleSlideChange={handleSlideChange} />
      </div>
    </section>
  );
}

export default Cases;
