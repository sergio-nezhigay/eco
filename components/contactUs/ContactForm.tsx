"use client";
import React from "react";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormField } from "@/components/ui/form";

import formSchema from "./formSchema";
import Field from "./Field";
import LearnMoreButton from "../hero/LearnMoreButton";
import error from "next/error";

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

  console.log("🚀 ~ file: ContactForm.tsx:32 ~ formState:", formState.errors);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values are:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSuccessMessage("Your message has been successfully sent!");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setSuccessMessage("");
    form.reset();
  }

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
            <Field
              fieldName="* Full name:"
              field={field}
              placeholder="John Rosie"
              error={formState.errors.username?.message}
            />
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Field
              fieldName="* Email:"
              field={field}
              placeholder="johnrosie@gmail.com"
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

        <LearnMoreButton content="Send" />
      </form>
    </Form>
  );
}

export default ContactForm;
