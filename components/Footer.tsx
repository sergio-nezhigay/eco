"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Separator } from "./ui/separator";
import Logo from "./navbar/Logo";
import Icon from "./ui/Icon";

import { CONTACT_INFO } from "@/constants";

function Footer() {
  return (
    <footer className="pb-6 md:pb-[40px]">
      <div className="container">
        <Separator className="mb-6 bg-primary-300 md:mb-[40px]" />

        <div className="mb-6 grid grid-cols-[auto,auto] items-center  justify-between gap-y-6 md:mb-4 md:grid-cols-[2fr,1fr,1fr]">
          <Logo />

          <ScrollLink
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            className=" cursor-pointer md:order-3 md:ml-auto lg:mr-0"
          >
            <div className="flex-center h-[32px] w-[32px] rounded-full bg-primary-300 hover:bg-primary-200 hover:text-primary-300 ">
              <Icon
                name="arrow-right"
                width={16}
                height={16}
                style="fill-transparent stroke-current rotate-[-90deg]"
              />
            </div>
          </ScrollLink>
          <div className="col-span-2 mx-auto flex gap-2 md:order-2 md:col-span-1 md:ml-3 md:mr-auto md:justify-items-start lg:ml-[149px]">
            {CONTACT_INFO.socialNetworks.map(
              ({ name, link }: { name: string; link: string }) => (
                <a
                  key={name}
                  href={link}
                  target="_blank"
                  aria-label={`Link to ${name}`}
                  rel="noopener noreferrer"
                  className=" hover:text-primary-300 lg:p-0"
                >
                  <Icon
                    name={name.toLowerCase()}
                    style="fill-transparent stroke-current"
                  />
                </a>
              )
            )}
          </div>
        </div>
        <div className="paragraph-regular flex flex-col gap-4 text-center md:grid md:grid-cols-[2fr,1fr,1fr] md:items-center md:gap-0">
          <p className="md:mr-auto ">{CONTACT_INFO.address}</p>
          <p className=" md:ml-3 md:mr-auto lg:ml-[149px]">
            {CONTACT_INFO.email}
          </p>
          <p className=" md:ml-auto ">ecosolution © 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
