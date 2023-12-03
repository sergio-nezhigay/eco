import { CONTACT_INFO } from "@/constants";
import Link from "next/link";
import React from "react";
import Icon from "../ui/Icon";
import SocialItems from "../common/SocialItems";

function Address() {
  return (
    <address className=" mb-6 not-italic md:mb-0 md:w-1/2 md:pr-[98px] lg:pr-[100px]">
      <p className="paragraph-regular mb-2 lg:mb-4">Phone:</p>
      <ul className="mb-6 flex flex-col gap-3 lg:mb-8">
        {CONTACT_INFO.phones.map((phone, index) => (
          <li key={index}>
            <Link
              className="group flex gap-2"
              href={`tel:${phone.replace(/\D/g, "")}`}
            >
              <div className="flex group-hover:text-primary-300">
                <Icon name="call" style="fill-transparent stroke-current" />
              </div>
              <p className="text-justify text-[20px] leading-6 tracking-m4 lg:text-[24px] lg:leading-7">
                {phone}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      <p className="paragraph-regular mb-2 lg:mb-4">E-mail:</p>
      <a
        className="group mb-6 flex items-center gap-2 lg:mb-8"
        href={`mailto:${CONTACT_INFO.email}`}
      >
        <div className="flex group-hover:text-primary-300  ">
          <Icon name="sms" style="fill-transparent stroke-current" />
        </div>
        <p className="text-justify text-[20px] leading-6 tracking-m4 lg:text-[24px] lg:leading-7">
          {CONTACT_INFO.email}
        </p>
      </a>

      <p className="paragraph-regular mb-2 lg:mb-4">Address:</p>
      <div className="mb-6 flex items-center gap-2 lg:mb-8">
        <Icon name="map" style="fill-transparent stroke-current" />
        <p className="text-justify text-[20px] leading-6 tracking-m4 lg:text-[24px] lg:leading-7">
          {CONTACT_INFO.address}
        </p>
      </div>
      <p className="paragraph-regular mb-2 lg:mb-4">Social Networks:</p>
      <SocialItems styles="p-3 block" />
    </address>
  );
}

export default Address;
