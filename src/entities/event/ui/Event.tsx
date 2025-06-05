import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { BadgeList } from '@/shared/ui/BadgeList';
import { Card } from '@/shared/ui/Card';
import type { TEvent } from '@/shared/model/types';
import { EditButtonGroup } from '@/shared/ui/EditButtonGroup';

type EventProps = {
  event: TEvent;
  onDelete: (event: TEvent) => void;
};

export const Event = ({ event, onDelete }: EventProps) => {
  const { title, startTime, endTime, tags } = event;

  const formattedStartTime = format(startTime, 'HH:mm');
  const formattedEndTime = format(endTime, 'HH:mm');

  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className={`self-center max-w-[550px] w-full p-4 border-4 border-[var(--border-${event.tags[0].color})]`}
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
        <EditButtonGroup item={event} onDelete={onDelete}/>
      </div>

      {tags.length > 0 && (
        <div className="mt-3">
          <BadgeList badges={tags} className="gap-1" badgeClassName="text-xs" />
        </div>
      )}
    </MotionCard>
  );
};
