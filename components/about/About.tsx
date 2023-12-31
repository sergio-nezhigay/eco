"use client";

import React from "react";
import Image from "next/image";

import { Separator } from "../ui/separator";
import { VALUES_PART1, VALUES_PART2 } from "@/constants";
import ValuesCard from "./ValuesCard";
import { toBase64, convertImage } from "@/utils/getBase64";
import { useSectionInView } from "@/lib/hooks";

const BLUR_COLOR = "#a4bccc";

function About() {
  const { ref } = useSectionInView("about");
  return (
    <section ref={ref} id="about" className="pb-9 md:pb-[100px] lg:pb-[120px]">
      <div className="container">
        <div className="grid grid-cols-4 gap-6 lg:gap-12">
          <h2 className="h2-base col-span-4  md:col-span-2">
            Main values of our company
          </h2>
          <div className=" relative col-span-4 mb-3 flex md:col-span-2 md:mb-[76px] lg:mb-[74px]">
            <Separator
              orientation="vertical"
              className="absolute left-[-11px] hidden bg-primary-300 md:block lg:left-[-24px]"
            />
            <p className="paragraph-regular   text-justify lg:ml-[137px] ">
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world&apos;s energy needs.
            </p>
          </div>

          {VALUES_PART1.map(({ description, iconId, title }) => (
            <ValuesCard
              iconId={iconId}
              description={description}
              title={title}
              key={iconId}
            />
          ))}

          <div className="relative hidden h-full w-full md:col-span-2 md:block">
            <Image
              src="/assets/images/wind-farms.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Wind farms"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(342, 197, BLUR_COLOR)
              )}`}
            />
          </div>
          <div className="relative hidden h-full w-full md:col-span-2 md:block">
            <Image
              src="/assets/images/man-worker.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt="Wind farms"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(342, 197, BLUR_COLOR)
              )}`}
            />
          </div>

          {VALUES_PART2.map(({ description, iconId, title }) => (
            <ValuesCard
              iconId={iconId}
              description={description}
              title={title}
              key={iconId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
