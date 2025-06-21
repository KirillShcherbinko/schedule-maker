import { AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import { Badge } from '@/shared/ui/badge';
import type { TBadgeColor } from '@/shared/ui/badge/model/types';

type AccordionBadgeProps = {
  title: string;
  color: TBadgeColor;
  content: string;
};

export const AccordionBadge = ({ title, color, content }: AccordionBadgeProps) => {
  return (
    <Badge className="p-3 rounded-[24px] w-full hover:cursor-pointer" variant={color}>
      <AccordionItem className="w-full" value={title}>
        <AccordionTrigger className="font-bold text:md sm:text-lg lg:text-xl p-0 hover:cursor-pointer">
          {title}
        </AccordionTrigger>
        <AccordionContent className="p-0 text-md">{content}</AccordionContent>
      </AccordionItem>
    </Badge>
  );
};
