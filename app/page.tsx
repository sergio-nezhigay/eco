import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Electricity from "@/components/Electricity";
import Cases from "@/components/cases/Cases";
import ContactUs from "@/components/contactUs/ContactUs";
import Faqs from "@/components/faqs/Faqs";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faqs />
      <ContactUs />
    </>
  );
}
