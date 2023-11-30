import React from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="group flex items-end gap-1">
      <Image
        src="/assets/images/logo.png"
        width={31}
        height={18}
        alt="logo"
        className="mb-[7px]"
      />
      <div className="text-primary-200 group-hover:text-primary-300 group-active:text-primary-300">
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
    </Link>
  );
}

export default Logo;
