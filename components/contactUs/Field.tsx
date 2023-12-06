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
  isTel?: boolean;
  placeholder?: string;
  error?: string | undefined;
}

function Field({
  fieldName,
  field,
  isTextarea = false,
  isTel = false,
  placeholder,
  error,
}: FieldProps) {
  const borderClasses = error
    ? "border-b border-b-[#D28B8B]"
    : "border-b border-b-primary-300";

  return (
    <FormItem className={`mb-7 space-y-0 ${isTextarea ? "flex flex-col" : ""}`}>
      <FormLabel
        id={fieldName.replace(/[^a-zA-Z]/g, "")}
        className="text-base font-normal leading-[19.2px]"
      >
        {fieldName}
      </FormLabel>
      <FormControl
        aria-describedby={fieldName.replace(/[^a-zA-Z]/g, "")}
        className={`rounded-none ${borderClasses} bg-transparent`}
      >
        {isTextarea ? (
          <textarea
            {...field}
            placeholder={placeholder}
            className="h-[147px] resize-none border-transparent px-0 py-2 text-[18px] leading-[21.6px] tracking-m4 outline-0 ring-current ring-offset-2 transition placeholder:text-primary-700 focus:ring-2 lg:h-[161px] lg:py-3 lg:text-[20px] lg:leading-[24px]"
          />
        ) : (
          <Input
            {...field}
            placeholder={placeholder}
            type={isTel ? "number" : "text"}
            className="h-[33px] border-transparent px-0 py-2 text-[18px] leading-[21.6px] tracking-m4 outline-0 ring-current  transition  placeholder:text-primary-700  focus:ring-1 lg:h-[40px] lg:py-3 lg:text-[20px] lg:leading-[24px]"
          />
        )}
      </FormControl>
      <FormMessage className="pt-3 text-right text-[12px] font-normal text-[#D28B8B]" />
    </FormItem>
  );
}

export default Field;
