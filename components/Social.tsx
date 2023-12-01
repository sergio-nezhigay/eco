import { CONTACT_INFO } from "@/constants";
import Link from "next/link";
import React from "react";
import Icon from "./ui/Icon";

function Social() {
  return (
    <>
      {CONTACT_INFO.socialNetworks.map(
        ({ name, link }: { name: string; link: string }) => (
          <Link
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:text-primary-300 lg:p-0"
          >
            <Icon
              name={name.toLowerCase()}
              style="fill-transparent stroke-current"
            />
          </Link>
        )
      )}
    </>
  );
}

export default Social;
