import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data";

export default function MyAccordion() {
  return (
    <section id="faq-accordion">
      <div className="container mt-8 md:max-w-3xl mx-auto px-6 md:px-12 mb-32">
        <Accordion type="single" collapsible>
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Bookmark?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum ea similique? Qui quidem impedit provident, nobis natus
              nostrum repellendus voluptate illum, eligendi magni dolorem
              blanditiis officia voluptas inventore? Incidunt.
            </AccordionContent>
          </AccordionItem>
          {/* Item 2*/}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can i request a new browser?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum ea similique? Qui quidem impedit provident, nobis natus
              nostrum repellendus voluptate illum, eligendi magni dolorem
              blanditiis officia voluptas inventore? Incidunt.
            </AccordionContent>
          </AccordionItem>
          {/* Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>Is this a mobile app?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum ea similique? Qui quidem impedit provident, nobis natus
              nostrum repellendus voluptate illum, eligendi magni dolorem
              blanditiis officia voluptas inventore? Incidunt.
            </AccordionContent>
          </AccordionItem>
          {/* Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What about other Chronium Browsers?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum ea similique? Qui quidem impedit provident, nobis natus
              nostrum repellendus voluptate illum, eligendi magni dolorem
              blanditiis officia voluptas inventore? Incidunt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
