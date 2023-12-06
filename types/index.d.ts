import React from "react";

export interface IMenuLink {
  id: string;
  label: string;
}

export interface ICard {
  description: string;
  iconId: string;
  title: string;
}

export interface ICases {
  description: string;
  date: string;
  title: string;
  imgTag: string;
}

export interface IFAQs {
  question: string;
  answer: string;
}

export interface PrimaryButtonProps {
  content: string;
  isHiddenInMobile?: true;
  scrollTo: string;
}

export interface FieldProps {
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

export interface ILogo {
  isScrolled?: boolean;
}
