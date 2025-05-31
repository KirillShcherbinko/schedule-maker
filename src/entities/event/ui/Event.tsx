import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { BadgeList } from '@/widgets/badge-list';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import type { TEvent } from '@/shared/model/types';
import { useEventsStore } from '@/pages/schedule/model/store';

type EventProps = {
  event: TEvent;
  onEdit?: (id: number) => void;
};

export const Event = ({ event, onEdit }: EventProps) => {
  const { id, title, startTime, endTime, tags } = event;

  const formattedStartTime = format(startTime, 'HH:mm');
  const formattedEndTime = format(endTime, 'HH:mm');
  const onDelete = useEventsStore((state) => state.removeEvent);

  const MotionCard = motion(Card);

  return (
    <MotionCard
      className="max-w-[500px] w-full p-4 self-center md:self-end"
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
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit?.(id)} className="h-8 w-8">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(id)}
            className="h-8 w-8 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {tags.length > 0 && (
        <div className="mt-3">
          <BadgeList badges={tags} badgeClassName="text-xs" />
        </div>
      )}
    </MotionCard>
  );
};
