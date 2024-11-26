import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  import React from 'react'
  
  function CustomAccordion({name,subMenu}) {
    return (
        <Accordion type="single" collapsible className = 'w-full px-1 text-white'>
        <AccordionItem value={name} className = 'border-none'>
          <AccordionTrigger className = 'text-white'>{name}</AccordionTrigger>
         {subMenu?.map((element,idx)=> (
          <AccordionContent key = {idx}>
            {element?.name}
          </AccordionContent>
         ))} 
        </AccordionItem>
      </Accordion>
    )
  }
  
  export default CustomAccordion