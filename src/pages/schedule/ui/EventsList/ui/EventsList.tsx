import type { TEvent } from '@/shared/model/types';
import { Event } from '@/entities/Event';
import { useAtom } from 'jotai';
import { AnimatePresence } from 'framer-motion';
import { filteredEventsAtom, selectedDateAtom } from '../../../model/atoms';
import { useEventStore } from '@/pages/schedule/model/store';

export const EventsList = () => {
  const [selectedDate] = useAtom(selectedDateAtom);
  const [filteredEvents] = useAtom(filteredEventsAtom);
  const onDelete = useEventStore((state) => state.removeEvent);

  const selectedEvents = filteredEvents[selectedDate.toDateString()];

  if (!selectedEvents || !selectedEvents.length) {
    return <div>Нет событий</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full overflow-auto h-[620px] pt-2 pl-[6px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
      <AnimatePresence mode="popLayout">
        {selectedEvents.map((event: TEvent) => (
          <Event key={event.id} event={event} onDelete={onDelete} />
        ))}
      </AnimatePresence>
    </div>
  );
};
