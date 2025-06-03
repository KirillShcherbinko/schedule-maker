import type { TEvent } from '@/shared/model/types';
import { Event } from '@/entities/event/ui';
import { useAtom } from 'jotai';
import { AnimatePresence } from 'framer-motion';
import { filteredEventsAtom, selectedDateAtom } from '../../model/atoms';

export const EventList = () => {
  const [selectedDate] = useAtom(selectedDateAtom);
  const [filteredEvents] = useAtom(filteredEventsAtom);

  const selectedEvents = filteredEvents[selectedDate.toDateString()];

  if (!selectedEvents || !selectedEvents.length) {
    return <div>Нет событий</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full overflow-auto h-[600px]">
      <AnimatePresence>
        {selectedEvents.map((event: TEvent) => (
          <Event key={event.id} event={event} />
        ))}
      </AnimatePresence>
    </div>
  );
};
