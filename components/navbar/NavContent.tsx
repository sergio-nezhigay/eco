import { menuLinks } from "@/constants";
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Icon from "../ui/Icon";
import { SheetClose } from "../ui/sheet";
import { useActiveSectionContext } from "@/context/active-section-context";

function NavContent() {
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
                    name="arrow-right-large"
                    width={16}
                    height={16}
                    style="fill-transparent stroke-current rotate-[-45deg]"
                  />
                </ScrollLink>
              </SheetClose>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavContent;
