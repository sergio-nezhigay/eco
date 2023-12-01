import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Electricity from "@/components/Electricity";
import Cases from "@/components/cases/Cases";
import FAQ from "@/components/faq/FAQ";
import ContactUs from "@/components/contactUs/ContactUs";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Electricity />
      <Cases />
      <FAQ />
      <ContactUs />
    </>
  );
}
