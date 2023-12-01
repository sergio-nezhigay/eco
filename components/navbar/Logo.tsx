import React from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { Link as ScrollLink } from "react-scroll";

interface ILogo {
  isScrolled?: boolean;
}

function Logo({ isScrolled = false }: ILogo) {
  return (
    <ScrollLink
      activeClass="active"
      href="/#main"
      to="main"
      spy={true}
      smooth={true}
      offset={-110}
      duration={500}
      className="group flex cursor-pointer items-end gap-1"
    >
      <Image
        src="/assets/images/logo.png"
        width={31}
        height={18}
        alt="logo"
        className="mb-[7px]"
      />
      <div
        className={`${
          isScrolled ? "text-primary-300" : "text-primary-200"
        } text-primary-200 group-hover:text-primary-300 group-active:text-primary-300`}
      >
        <Icon
          name="name"
          width={170}
          height={40}
          style="fill-current stroke-current"
        />
      </div>

      <Image
        src="/assets/images/slogan.png"
        width={60}
        height={18}
        alt="logo"
        className="mb-[7px]"
      />
    </ScrollLink>
  );
}

export default Logo;
