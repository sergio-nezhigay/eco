"use client";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import formSchema from "./formSchema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import SecondaryButton from "../main/SecondaryButton";
import Field from "./Field";

import { Input } from "../ui/input";

export function ProfileForm() {}

function ContactForm() {
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { formState } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values are:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccessMessage("Your message has been successfully sent!");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSuccessMessage("");
    form.reset();
  }

  const test = ({ field }) => (
    <Field
      fieldName="* Full name:"
      field={field}
      placeholder="John Rosie"
      error={formState.errors.username?.message}
    />
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-primary-500 px-3 py-9 md:w-1/2 md:px-6 lg:p-12"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            // <Field
            //   fieldName="* Full name:"
            //   field={field}
            //   placeholder="John Rosie"
            //   error={formState.errors.username?.message}
            // />

            <FormItem className={`mb-7 space-y-0 `}>
              <FormLabel className="paragraph-regular  ">zdsfhedyh</FormLabel>
              <FormControl className={`rounded-none  bg-transparent`}>
                <Input
                  {...field}
                  placeholder="dxgfh"
                  className="px-0 py-2 text-[18px] leading-[21.6px] tracking-m4 outline-0  ring-current placeholder:text-primary-700 focus:ring-1 lg:text-[20px] lg:leading-[24px]"
                />
              </FormControl>
              <FormMessage className="pt-3 text-right text-[12px] font-normal text-[#D28B8B]" />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <Field
              fieldName="* Full name:"
              field={field}
              placeholder="John Rosie"
              error={formState.errors.username?.message}
            />
          )}
        /> */}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Field
              fieldName="* Email:"
              field={field}
              placeholder="johnrosie@gmail.com"
              error={formState.errors.email?.message}
            />
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <Field
              fieldName="* Phone:"
              field={field}
              placeholder="380961234567"
              error={formState.errors.phone?.message}
            />
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <Field
              fieldName="Message:"
              field={field}
              isTextarea
              placeholder="Your message"
            />
          )}
        />
        {successMessage && (
          <h2 className="mb-5 text-green-500">{successMessage}</h2>
        )}
        <button type="submit" className="p-0">
          <SecondaryButton content="Send" />
        </button>
      </form>
    </Form>
  );
}

export default ContactForm;
