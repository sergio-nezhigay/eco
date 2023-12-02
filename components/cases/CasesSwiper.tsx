import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { CASES } from "@/constants";
import CasesItem from "./CasesItem";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import Icon from "../ui/Icon";

function CasesSwiper({ handleSlideChange }: any) {
  const swiperButton = (rotation: number) => {
    return (
      <div className="flex-center absolute h-[66px] w-[66px] rounded-full border border-primary-200  text-primary-200 hover:border-primary-300 hover:text-primary-300  lg:h-[84px] lg:w-[84px]">
        <Icon
          name="arrow-right-large"
          style={`${
            rotation === 180 ? "rotate-180" : ""
          } fill-transparent stroke-current !w-9 !h-9`}
        />
      </div>
    );
  };
  return (
    <div className="relative">
      <Swiper
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        onSlideChange={handleSlideChange}
        wrapperTag="ul"
      >
        {CASES.map(({ title, description, date, imgTag }) => (
          <SwiperSlide key={title} tag="li">
            <CasesItem
              title={title}
              description={description}
              date={date}
              imgTag={imgTag}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next">{swiperButton(0)}</div>
      <div className="swiper-button-prev">{swiperButton(180)}</div>
    </div>
  );
}

export default CasesSwiper;
