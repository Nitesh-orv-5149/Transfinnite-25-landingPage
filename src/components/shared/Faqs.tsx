import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Faqs() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-8 mb-20">
      <h1 className="text-4xl font-bold mt-20 underline">FAQs</h1>
      <Accordion className="w-[60vw] mt-10" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is TransfiNITTe?</AccordionTrigger>
          <AccordionContent>
            Its a 42 hour weekend hackathon organized by the students of NITT.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What are the different Domains?</AccordionTrigger>
          <AccordionContent>
            Software, Hardware, Cybersecurity, Blockchain, Entrepenuership and more...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Will food be provided?</AccordionTrigger>
          <AccordionContent>
            Yes. food will be provided at the venue.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default Faqs