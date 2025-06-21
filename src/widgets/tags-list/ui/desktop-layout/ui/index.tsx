import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import type { ReactNode } from 'react';
import { AddTagButton } from '@/features/add-tag-button';

type DesktopLayoutProps = {
  children: ReactNode;
};

export const DesktopLayout = ({ children }: DesktopLayoutProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <div className="overflow-hidden">
        <AccordionItem value="filter-by-tag" className="w-full">
          <AccordionTrigger className="hover:bg-accent/50 pt-2 pb-2 pl-5 pr-5 rounded-2xl">
            <AddTagButton />
          </AccordionTrigger>
          <AccordionContent className="max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
            {children}
          </AccordionContent>
        </AccordionItem>
      </div>
    </Accordion>
  );
};
