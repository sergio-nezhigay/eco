import React from "react";
import Icon from "../ui/Icon";

function SecondaryButton({ content }: { content: string }) {
  return (
    <span className="flex-center mx-auto flex w-fit gap-3  rounded-full border border-primary-300 bg-transparent py-[3.5px] pl-4 pr-1 text-base font-normal leading-[18px] tracking-m4 hover:bg-primary-200 hover:text-primary-300  md:ml-0">
      {content}
      <span className="flex-center h-[32px] w-[32px] rounded-full  bg-primary-300 text-primary-200 hover:border-none">
        <Icon
          name="arrow-down"
          width={16}
          height={16}
          style="-rotate-90 fill-current stroke-current"
        />
      </span>
    </span>
  );
}

export default SecondaryButton;
