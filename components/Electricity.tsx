import { Separator } from "./ui/separator";
import React from "react";

function Electricity() {
  return (
    <section className="pb-9 md:pb-[100px] lg:pb-[120px]">
      <div className="container">
        <h2 className="h2-base mb-6 text-center lg:mb-[16px] ">
          Electricity we produced for all time
        </h2>
        <Separator
          orientation="vertical"
          className=" mx-auto mb-6 h-12 bg-primary-300 md:h-[87px] lg:mb-[17px]"
        />
        <h4 className="flex-center gap-2 text-center text-[48px] font-bold leading-[48px] text-primary-300 md:text-[100px] md:leading-[100px] lg:gap-6 lg:text-[164px] lg:leading-[164px]">
          1.134.147.814
          <span className="text-[24px] font-normal leading-[24px] text-primary-200 md:text-[28px] md:leading-[48px] lg:text-[48px]">
            kWh
          </span>
        </h4>
      </div>
    </section>
  );
}

export default Electricity;
