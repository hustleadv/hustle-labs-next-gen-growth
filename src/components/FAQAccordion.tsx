import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  dark?: boolean;
}

const FAQAccordion = ({ items, dark = false }: FAQAccordionProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full" 
      value={value} 
      onValueChange={setValue}
    >
      {items.map((item, i) => {
        const itemValue = `item-${i}`;
        return (
          <AccordionItem 
            key={i} 
            value={itemValue} 
            className={dark ? "border-white/10" : "border-border"}
            onMouseEnter={() => setValue(itemValue)}
          >
            <AccordionTrigger 
              className={`font-display text-left hover:text-primary hover:no-underline py-5 ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent 
              className={`leading-relaxed pb-5 ${
                dark ? "text-white/60" : "text-slate-600"
              }`}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
