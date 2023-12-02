import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Electricity from "@/components/Electricity";
import Cases from "@/components/cases/Cases";
import ContactUs from "@/components/contactUs/ContactUs";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
    </>
  );
}
