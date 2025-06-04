import { AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/Accordion';
import { Badge } from '@/shared/ui/Badge';
import type { TBadge } from '@/shared/ui/Badge/model/types';

type AccordionBadgeProps = {
  badge: TBadge;
  content: string;
};

export const AccordionBadge = ({ badge, content }: AccordionBadgeProps) => {
  return (
    <Badge className="p-3 rounded-[24px] w-full hover:cursor-pointer" variant={badge.color}>
      <AccordionItem className="w-full" value={badge.title}>
        <AccordionTrigger className="font-bold text:md sm:text-lg lg:text-xl p-0 hover:cursor-pointer">
          {badge.title}
        </AccordionTrigger>
        <AccordionContent className="p-0 text-md">{content}</AccordionContent>
      </AccordionItem>
    </Badge>
  );
};
