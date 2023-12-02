"use client";
import React, { useState, useEffect } from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import PrimaryButton from "../common/PrimaryButton";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="fixed inset-x-0 z-50">
      <nav className="container   top-9    bg-primary-800/90  p-4 lg:top-2">
        <div className="relative flex items-center justify-between">
          <Logo isScrolled={scrolled} />
          <div className="flex-center gap-3">
            <Menu />
            <PrimaryButton
              content="Get in touch"
              scrollTo="contactus"
              isHiddenInMobile
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
