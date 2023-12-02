"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { Separator } from "./ui/separator";
import Icon from "./ui/Icon";
import Logo from "./navbar/Logo";
import { CONTACT_INFO } from "@/constants";
import SocialItems from "./common/SocialItems";

function Footer() {
  return (
    <footer className="pb-6 md:pb-[40px]">
      <div className="container">
        <Separator className="mb-6 bg-primary-300 md:mb-[40px]" />

        <div className="mb-6 grid grid-cols-[auto,auto] items-center  justify-between gap-y-6 md:mb-4 md:grid-cols-[2fr,1fr,1fr]">
          <Logo />

          <ScrollLink
            activeClass="active"
            href="/"
            to="main"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            className=" cursor-pointer md:order-3 md:ml-auto lg:mr-0"
          >
            <div className="flex-center h-[32px] w-[32px] rounded-full bg-primary-300 hover:bg-primary-200 hover:text-primary-300 ">
              <Icon
                name="arrow-right-large"
                width={16}
                height={16}
                style="fill-transparent stroke-current rotate-[-90deg]"
              />
            </div>
          </ScrollLink>
          <ul className="col-span-2 mx-auto flex gap-2 md:order-2 md:col-span-1 md:ml-3 md:mr-auto md:justify-items-start lg:ml-[149px]">
            <SocialItems />
          </ul>
        </div>
        <address className="not-italic">
          <ul className="paragraph-regular flex flex-col gap-4 text-center  md:grid md:grid-cols-[2fr,1fr,1fr] md:items-center md:gap-0">
            <li className="md:mr-auto" aria-label="Address">
              {CONTACT_INFO.address}
            </li>
            <li
              className="md:ml-3 md:mr-auto lg:ml-[149px]"
              aria-label="Email Address"
            >
              {CONTACT_INFO.email}
            </li>
            <li className="md:ml-auto" aria-label="Copyright Information">
              ecosolution © 2023
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
