import React from "react";
import Icon from "../ui/Icon";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { menuLinks } from "@/constants";

const NavContent = () => {
  return (
    <div className="flex  flex-col justify-between">
      <ul className="flex flex-col items-start gap-2">
        {menuLinks.map((item) => {
          return (
            <li key={item.id}>
              <SheetClose asChild>
                <Link
                  href={item.id}
                  className="flex-center gap-2 text-2xl leading-[29px] tracking-m4 text-white hover:text-primary-300"
                >
                  <p>{item.label}</p>
                  <svg
                    className="fill-current stroke-current"
                    width={16}
                    height={16}
                  >
                    <use href={`assets/icons/icons.svg#arrow-right-up`}></use>
                  </svg>
                </Link>
              </SheetClose>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex-center h-[40px] w-[40px] rounded-full bg-primary-400 hover:bg-primary-300 ">
          <Icon name="menu" width={16} height={16} strokeColor="red" />
        </div>
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
                  <svg
                    className="fill-current stroke-current"
                    width={20}
                    height={20}
                  >
                    <use href={`assets/icons/icons.svg#close-light`}></use>
                  </svg>
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
                <Link
                  href="https://www.facebook.com/"
                  className="text-white hover:text-primary-300"
                >
                  <svg
                    className="fill-current stroke-current"
                    width={24}
                    height={24}
                  >
                    <use href={`assets/icons/icons.svg#facebook`}></use>
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  className="text-white hover:text-primary-300"
                >
                  <svg
                    className="fill-current stroke-current"
                    width={24}
                    height={24}
                  >
                    <use href={`assets/icons/icons.svg#instagram`}></use>
                  </svg>
                </Link>
              </div>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
