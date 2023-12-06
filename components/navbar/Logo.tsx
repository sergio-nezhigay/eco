import React from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { Link as ScrollLink } from "react-scroll";
// import style from "styled-jsx/style";

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
      <Icon
        name="logo-large"
        width={269}
        height={40}
        style={`${
          isScrolled ? "fill-primary-300" : "fill-primary-200"
        } stroke-transparent group-hover:fill-primary-300 group-focus:fill-primary-300 transition`}
      />
    </ScrollLink>
  );
}

export default Logo;
