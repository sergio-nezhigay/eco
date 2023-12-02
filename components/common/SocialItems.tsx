import { CONTACT_INFO } from "@/constants";
import React from "react";
import Icon from "../ui/Icon";

function SocialItems({ styles = "" }) {
  return (
    <>
      {CONTACT_INFO.socialNetworks.map(
        ({ name, link }: { name: string; link: string }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              aria-label={`Link to ${name}`}
              rel="noopener noreferrer"
              className={`${styles} hover:text-primary-300 lg:p-0`}
            >
              <Icon
                name={name.toLowerCase()}
                style="fill-current stroke-current"
              />
            </a>
          </li>
        )
      )}
    </>
  );
}

export default SocialItems;