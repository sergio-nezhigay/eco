"use client";

import React from "react";
import Icon from "../ui/Icon";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import NavContent from "./NavContent";
import SocialItems from "../common/SocialItems";

function Menu() {
  return (
    <Sheet>
      <SheetTrigger aria-controls="span" className="group">
        <span
          id="span"
          className="flex-center h-[39px] w-[39px] rounded-full bg-primary-400 transition hover:bg-primary-300 group-focus:bg-primary-300"
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
        <div className="flex h-full w-full flex-col justify-between border-none bg-[#173D33BF] p-6 backdrop-blur-md">
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
              <div className="mr-auto ">
                <SocialItems styles="text-white" />
              </div>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Menu;
