import React from "react";

import Logo from "./Logo";
import MobileNav from "./MobileNav";
import GetInTouchButton from "./GetInTouchButton";

function Navbar() {
  return (
    <nav className="container fixed  left-2/4 top-9 -translate-x-1/2 lg:top-6">
      <div className="relative flex items-center justify-between">
        <Logo />
        <div className="flex-center gap-3">
          <MobileNav />
          <GetInTouchButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
