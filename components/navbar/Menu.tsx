"use client";

import React from "react";
import Icon from "../ui/Icon";
import { Button } from "../ui/button";
import { Link as ScrollLink } from "react-scroll";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useActiveSectionContext } from "@/context/active-section-context";
import { menuLinks } from "@/constants";

const NavContent = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="flex  flex-col justify-between">
      <ul className="flex flex-col items-start gap-2">
        {menuLinks.map(({ id, label }) => {
          const isActiveSection = id === activeSection;
          return (
            <li key={id}>
              <SheetClose asChild>
                <ScrollLink
                  activeClass="active"
                  to={id}
                  href={`/#${id}`}
                  spy={true}
                  offset={-110}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setActiveSection(id);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={`${
                    isActiveSection ? "section-active" : "section-notactive"
                  } flex-center cursor-pointer gap-2 text-2xl leading-[29px] tracking-m4 text-white/25 hover:text-white`}
                >
                  <p>{label}</p>
                  <Icon
                    name="arrow-right-up"
                    width={16}
                    height={16}
                    style="fill-current stroke-current"
                  />
                </ScrollLink>
              </SheetClose>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function Menu() {
  return (
    <Sheet>
      <SheetTrigger aria-controls="span">
        <span
          id="span"
          className="flex-center h-[39px] w-[39px] rounded-full bg-primary-400 hover:bg-primary-300 "
        >
          <Icon
            name="menu"
            width={16}
            height={16}
            style="fill-current stroke-current"
          />
        </span>
      </SheetTrigger>
      <SheetContent
        className=" right-2/4 top-9 h-[calc(100%-72px)] w-[calc(100%-40px)]  
       translate-x-1/2 overflow-hidden rounded-[25px] border-none bg-transparent 
       p-0 md:right-[30px] md:top-6 md:h-[calc(100%-48px)] md:w-[365px] md:translate-x-0 lg:right-[100px]"
      >
        <div className="flex h-full w-full flex-col justify-between border-none bg-[#173D33BF] p-6">
          <div>
            <SheetHeader>
              <SheetClose asChild>
                <Button
                  type="submit"
                  className="flex-center h-fit w-fit gap-1 p-0 text-white hover:text-primary-300"
                >
                  <Icon
                    name="close-light"
                    width={20}
                    height={20}
                    style="fill-current stroke-current"
                  />
                  <span className="mb-1 text-xl font-normal">close</span>
                </Button>
              </SheetClose>
            </SheetHeader>
            <Separator className="mb-6 mt-2 bg-white" />
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <div className="mr-auto flex flex-row gap-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  aria-label={`Link to Facebook`}
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-300"
                >
                  <Icon name="facebook" style="fill-current stroke-current" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-label={`Link to Facebook`}
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-300"
                >
                  <Icon name="instagram" style="fill-current stroke-current" />
                </a>
              </div>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
