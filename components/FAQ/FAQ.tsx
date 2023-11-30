import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import { FAQs } from "@/constants";
import ActionButton from "../ui/ActionButton";
import "./styles.css";

function FAQ() {
  return (
    <section className="section-regular">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-6">
        <h2 className="h2-base mb-6 md:order-2 md:mb-0 ">
          Frequently Asked Questions
        </h2>
        <div className="col-span-2  mb-8 md:order-1 md:col-span-1 md:row-span-2 md:mb-0">
          <Separator className=" mb-0 bg-primary-300 " />
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
          >
            {FAQs.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex-row-reverse text-justify hover:!no-underline ">
                  <span className="pl-2 font-firasans text-[18px] font-normal leading-[21.6px] tracking-m4   lg:text-[24px]  lg:leading-[28.8px]">
                    {question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-6 text-justify leading-[16.8px]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="md:order-3 md:self-end">
          <p className="mb-3 text-center text-[18px] font-normal   leading-[21.6px]  tracking-m4 lg:text-[24px] lg:leading-[28.8px]">
            Didn&apos;t find the answer to your question?{" "}
          </p>
          <div className="flex-center">
            <ActionButton content="Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
