"use client";
import React from "react";
import HandRaised from "./HandRaised";
import Broadcaster from "./Broadcaster";
import Viewer from "./Viewer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const accordion = [
  { label: "Hand Raised", detail: <HandRaised /> },
  { label: "Broadcaster", detail: <Broadcaster /> },
  { label: "Viewer", detail: <Viewer /> }
];

const Participant = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="mt-4 flex w-full flex-col gap-3">
      {accordion.map((i) => (
        <AccordionItem
          className="flex flex-col gap-2 overflow-hidden rounded-md border border-gray-600"
          key={i.label}
          value={i.label}>
          <AccordionTrigger className="flex gap-1 border-b border-gray-600 px-2">
            {i.label}
            <span className="ml-1">(3)</span>
          </AccordionTrigger>
          <AccordionContent className="mt-3 px-2">{i.detail}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Participant;
