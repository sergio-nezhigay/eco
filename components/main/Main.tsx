"use client";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { convertImage, toBase64 } from "@/utils/getBase64";
import { Link as ScrollLink } from "react-scroll";

const BLUR_COLOR = "#9fbbcd";

function Main() {
  return (
    <section
      id="main"
      className="pb-9 pt-[222px] md:pb-[100px] md:pt-[240px] lg:pb-[120px] lg:pt-[264px]"
    >
      <div className="container">
        <div className="mb-6 md:flex md:justify-between">
          <h1 className="mb-6 text-4xl uppercase leading-9 md:mb-0 md:max-w-[301px] md:text-5xl md:leading-[48px] lg:max-w-[485px] lg:text-[64px] lg:leading-[64px]">
            RENEWABLE ENERGY For any&nbsp;task
          </h1>
          <div className=" md:flex md:w-[342px] md:flex-col md:justify-between lg:mr-0 lg:w-[459px]">
            <p className="paragraph-regular mb-6 text-justify md:mb-0 lg:mr-[96px]">
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <ScrollLink
              activeClass="active"
              to="cases"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="w-fit cursor-pointer"
            >
              <SecondaryButton content="Learn more" />
            </ScrollLink>
          </div>
        </div>

        <Separator className="mb-6 bg-primary-300 md:mb-4 lg:mb-3" />
        <div className="md:mb-10 md:flex md:items-center lg:mb-9 ">
          <p className="paragraph-regular mb-2 text-center md:mb-0 md:mr-auto">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </p>
          <div className="md:flex md:w-[342px] md:justify-between lg:w-[459px]">
            <p className="paragraph-regular mb-9 text-center md:mb-0">
              office@ecosolution.com
            </p>
            <p className="paragraph-regular hidden md:block ">
              ecosolution © 2023
            </p>
          </div>
        </div>

        <div className="relative h-[200px] w-full md:h-[348px] lg:h-[524px]">
          <Image
            src="/assets/images/wind-turbine.jpg"
            fill
            alt="window turbines"
            priority
            objectFit="cover"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(319, 200, BLUR_COLOR)
            )}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Main;
