import Values from "@/components/values/Values";
import Hero from "@/components/hero/Hero";
import Electricity from "@/components/Electricity";
import Cases from "@/components/cases/Cases";
import FAQ from "@/components/faq/FAQ";
import Test from "@/components/Test";
import ContactUs from "@/components/contactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Electricity />
      <Cases />
      <FAQ />
      <ContactUs />
      {/* <Test /> */}
      <h1>test</h1>
      <h1>test</h1>
    </>
  );
}
