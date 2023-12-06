import { CONTACT_INFO } from "@/constants";
import React from "react";
import Icon from "../ui/Icon";

function SocialItems({ styles = "" }) {
  return (
    <ul className="flex gap-2">
      {CONTACT_INFO.socialNetworks.map(
        ({ name, link }: { name: string; link: string }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              aria-label={`Link to ${name}`}
              rel="noopener noreferrer"
              className={`${styles} transition hover:text-primary-300 focus:text-primary-300 lg:p-0`}
            >
              <Icon
                name={name.toLowerCase()}
                style="fill-current stroke-current"
              />
            </a>
          </li>
        )
      )}
    </ul>
  );
}

export default SocialItems;
