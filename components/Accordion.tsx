import React from "react";
import { faq } from "@/data";
import FAQItem from "./FAQItem";

export default function Accordion() {
  return (
    <section id="faq-accordion">
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-2xl m-8 mx-auto overflow-hidden">
          {faq.map((title, idx) => (
            <FAQItem key={idx} tabIndex={idx} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}
