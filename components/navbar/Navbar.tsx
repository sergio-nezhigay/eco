"use client";
import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import ActionButton from "../ui/ActionButton";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className="container fixed  left-2/4 top-9 z-10 -translate-x-1/2  bg-primary-800/80  p-4 lg:top-2">
        <div className="relative flex items-center justify-between">
          <Logo isScrolled={scrolled} />
          <div className="flex-center gap-3">
            <Menu />
            <ActionButton
              content="Get in touch"
              style="hidden"
              scrollTo="contactus"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
