import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { BadgeList } from '@/shared/ui/BadgeList';
import { Card } from '@/shared/ui/Card';
import type { TEvent } from '@/entities/Event/model/types';
import { EditButtonGroup } from '@/shared/ui/EditButtonGroup';
import { useEventStore } from '../model/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTagStore } from '@/entities/Tag/model/store';

type EventProps = {
  event: TEvent;
  editLink: string;
};

export const Event = ({ event, editLink }: EventProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const allTags = useTagStore((state) => state.tags);
  const removeEvent = useEventStore((state) => state.removeEvent);

  const onDelete = () => {
    removeEvent(event);

    const updatedTags = allTags.map((tag) => {
      const filteredEvents = tag.events.filter((e) => e.id !== event.id);
      return { ...tag, events: filteredEvents };
    });

    useTagStore.setState({ tags: updatedTags });
  };

  const onEdit = () => {
    useEventStore.setState({ editedEvent: event });
    navigate(editLink, { state: { backgroundLocation: location } });
  };

  const { title, startTime, endTime, tags } = event;

  const formattedStartTime = format(startTime, 'HH:mm');
  const formattedEndTime = format(endTime, 'HH:mm');

  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className={`self-center max-w-[550px] w-full p-4 border-4 border-[var(--border-${event.tags.length ? event.tags[0].color : 'sky'})]`}
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
        <EditButtonGroup item={event} onDelete={onDelete} onEdit={onEdit} />
      </div>

      {tags.length > 0 && (
        <div className="mt-3">
          <BadgeList badges={tags} className="gap-1" badgeClassName="text-xs" />
        </div>
      )}
    </MotionCard>
  );
};
