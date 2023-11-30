import React from "react";
import ContactForm from "./ContactForm";
import Address from "./Address";

function ContactUs() {
  return (
    <section className="section-regular">
      <div className="container">
        <h2 className="h2-base mb-6 text-center md:mb-[40px] lg:mb-[120px] ">
          Contact us
        </h2>
        <div className=" md:flex md:gap-6 lg:gap-12">
          <Address />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
