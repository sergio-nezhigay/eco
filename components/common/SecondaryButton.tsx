import React from "react";
import Icon from "../ui/Icon";

function SecondaryButton({ content }: { content: string }) {
  return (
    <span className="flex-center mx-auto flex w-fit gap-3  rounded-full border border-primary-300 bg-transparent py-[3.5px] pl-4 pr-1 text-base font-normal leading-[18px] tracking-m4 transition hover:border-primary-200 hover:bg-primary-200 hover:text-primary-300 group-focus:border-primary-200  group-focus:bg-primary-200 group-focus:text-primary-300 md:ml-0">
      {content}
      <span className="flex-center h-[32px] w-[32px] rounded-full  bg-primary-300 text-primary-200 transition hover:border-none focus:border-none">
        <Icon
          name="arrow-right-large"
          width={16}
          height={16}
          style=" fill-transparent  stroke-current"
        />
      </span>
    </span>
  );
}

export default SecondaryButton;
