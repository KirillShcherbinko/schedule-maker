import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { BadgeList } from '@/widgets/BadgeList';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import type { TEvent } from '@/shared/model/types';
import { useEventStore } from '@/pages/schedule/model/store';

type EventProps = {
  event: TEvent;
};

export const Event = ({ event }: EventProps) => {
  const { title, startTime, endTime, tags } = event;

  const formattedStartTime = format(startTime, 'HH:mm');
  const formattedEndTime = format(endTime, 'HH:mm');

  const onDelete = useEventStore((state) => state.removeEvent);

  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className="max-w-[550px] w-full p-4 self-center md:self-end"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      layout
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
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(event)}
            className="h-8 w-8 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="mt-3">
          <BadgeList badges={tags} className="gap-1" badgeClassName="text-xs" />
        </div>
      )}
    </MotionCard>
  );
};
