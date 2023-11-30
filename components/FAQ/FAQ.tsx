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
      <div className="container">
        <h2 className="h2-base mb-6 md:mb-0  ">Frequently Asked Questions</h2>
        <Separator className=" mb-0 bg-primary-300 " />
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {FAQs.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="paragraph-larger flex-row-reverse  text-justify hover:!no-underline">
                <span className="pl-2 font-firasans ">{question}</span>
              </AccordionTrigger>
              <AccordionContent className="pl-6 text-justify leading-[16.8px]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="paragraph-larger mb-3 text-center">
          Didn&apos;t find the answer to your question?{" "}
        </p>
        <div className="flex-center">
          <ActionButton content="Contact Us" />
        </div>
      </div>
    </section>
  );
}

export default FAQ;
