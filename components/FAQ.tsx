import React from "react";
import Accordion from "./Accordion";

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container mx-auto">
        <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-lg px-6 mx-auto text-center text-grayishBlue">
          Here are some of our FAWs. If you have any other questions you&apos;d
          like answered please feel free to email us.
        </p>
      </div>
      <Accordion />
    </section>
  );
}
