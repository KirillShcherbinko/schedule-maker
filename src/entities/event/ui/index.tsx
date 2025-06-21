import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Card } from '@/shared/ui/card';
import type { TEvent } from '../model/types';
import type { ReactNode } from 'react';
import { Badge } from '@/shared/ui/badge';
import { cn } from '@/shared/lib/utils';

type EventProps = {
  event: TEvent;
  children: ReactNode;
};

export const Event = ({ event, children }: EventProps) => {
  const { title, startTime, endTime, tags } = event;

  const formattedStartTime = format(startTime, 'HH:mm');
  const formattedEndTime = format(endTime, 'HH:mm');

  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className={cn(
        'self-center max-w-[550px] w-full p-4',
        `border-4 border-[var(--border-${event.tags.length ? event.tags[0].color : 'sky'})]`,
      )}
      layout
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ translateY: -8 }}
      whileTap={{ translateY: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {formattedStartTime} - {formattedEndTime}
          </p>
        </div>
        {children}
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Badge key={tag.id} className="text-xs" variant={tag.color}>
            {tag.title}
          </Badge>
        ))}
      </div>
    </MotionCard>
  );
};
