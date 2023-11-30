import { CONTACT_INFO } from "@/constants";
import Link from "next/link";
import React from "react";
import Icon from "../ui/Icon";

function Address() {
  return (
    <address className=" mb-6 not-italic md:mb-0 md:w-1/2 md:pr-[98px] lg:pr-[100px]">
      <p className="paragraph-regular mb-2 lg:mb-4">Phone:</p>
      <div className="mb-6 flex flex-col gap-3 lg:mb-8">
        {CONTACT_INFO.phones.map((phone, index) => (
          <Link className="group flex gap-2" key={index} href={`tel:${phone}`}>
            <div className="flex group-hover:text-primary-300  ">
              <Icon name="call" style="fill-transparent stroke-current" />
            </div>
            <p className="text-justify text-[20px] leading-6 tracking-m4 lg:text-[24px] lg:leading-7">
              {phone}
            </p>
          </Link>
        ))}
      </div>

      <p className="paragraph-regular mb-2 lg:mb-4">E-mail:</p>
      <Link
        className="group mb-6 flex gap-2 lg:mb-8"
        href={`mailto:${CONTACT_INFO.email}`}
      >
        <div className="flex group-hover:text-primary-300  ">
          <Icon name="sms" style="fill-transparent stroke-current" />
        </div>
        <p className="text-justify text-[20px] leading-6 tracking-m4 lg:text-[24px] lg:leading-7">
          {CONTACT_INFO.email}
        </p>
      </Link>

      <p className="paragraph-regular mb-2 lg:mb-4">Address:</p>
      <div className="mb-6 flex gap-2 lg:mb-8">
        <Icon name="map" style="fill-transparent stroke-current" />
        <p className="text-justify text-[20px] leading-6 tracking-m4 lg:text-[24px] lg:leading-7">
          {CONTACT_INFO.address.postalCode}, {CONTACT_INFO.address.country},{" "}
          {CONTACT_INFO.address.city}, {CONTACT_INFO.address.street}
        </p>
      </div>

      <p className="paragraph-regular mb-2 lg:mb-4">Social Networks:</p>
      <div className="flex gap-2 ">
        {CONTACT_INFO.socialNetworks.map((network, index) => (
          <Link
            key={index}
            href={network.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:text-primary-300 lg:p-0"
          >
            <Icon
              name={network.name.toLowerCase()}
              style="fill-transparent stroke-current"
            />
          </Link>
        ))}
      </div>
    </address>
  );
}

export default Address;
