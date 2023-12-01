import About from "@/components/about/About";
import Main from "@/components/main/Main";
import Electricity from "@/components/Electricity";
import Cases from "@/components/cases/Cases";
// import Faq from "@/components/faq/Faq";
import ContactUs from "@/components/contactUs/ContactUs";
import Test from "@/components/test/Test";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Electricity />
      <Cases />
      {/* <Faq /> */}
      <Test />
      <ContactUs />
    </>
  );
}
