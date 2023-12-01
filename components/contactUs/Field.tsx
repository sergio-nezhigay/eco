import React from "react";
import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface FieldProps {
  fieldName: string;
  field: {
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
  };
  isTextarea?: boolean;
  placeholder?: string;
  error?: string | undefined;
}

function Field({
  fieldName,
  field,
  isTextarea = false,
  placeholder,
  error,
}: FieldProps) {
  const borderClasses = error
    ? "border-b border-b-[#D28B8B]"
    : "border-b border-b-primary-300";

  return (
    <FormItem className={`mb-7 space-y-0 ${isTextarea ? "flex flex-col" : ""}`}>
      <FormLabel className="paragraph-regular  ">
        {fieldName}
        <FormControl className={`rounded-none ${borderClasses} bg-transparent`}>
          {isTextarea ? (
            <textarea
              {...field}
              placeholder={placeholder}
              className="h-[147px] resize-none px-0 py-2 text-[18px] leading-[21.6px] tracking-m4 outline-0 ring-current ring-offset-2 placeholder:text-primary-700 focus:ring-2 lg:text-[20px] lg:leading-[24px]"
            />
          ) : (
            <Input
              {...field}
              placeholder={placeholder}
              className="px-0 py-2 text-[18px] leading-[21.6px] tracking-m4 outline-0  ring-current placeholder:text-primary-700 focus:ring-1 lg:text-[20px] lg:leading-[24px]"
            />
          )}
        </FormControl>
      </FormLabel>
      <FormMessage className="pt-3 text-right text-[12px] font-normal text-[#D28B8B]" />
    </FormItem>
  );
}

export default Field;
