import type { TEvent } from '@/shared/model/types';
import { Event } from '@/entities/event/ui';
import { useEventsStore } from '../../model/store';
import { useShallow } from 'zustand/react/shallow';
import { useAtom } from 'jotai';
import { currentData } from '../../model/atoms';
import { AnimatePresence } from 'framer-motion';

export const EventList = () => {
  const [date] = useAtom(currentData);
  const { filteredEvents } = useEventsStore(
    useShallow((state) => ({
      filteredEvents: state.filteredEvents,
    })),
  );

  const todayEvents = filteredEvents.filter((event) => event.startTime.toDateString() === date.toDateString());

  return (
    <div className="flex flex-col gap-4 w-full">
      <AnimatePresence>
        {todayEvents.map((event: TEvent) => (
          <Event key={event.id} event={event} />
        ))}
      </AnimatePresence>
    </div>
  );
};
