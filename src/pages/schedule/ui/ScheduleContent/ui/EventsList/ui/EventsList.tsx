import type { TEvent } from '@/entities/Event/model/types';
import { Event } from '@/entities/Event';
import { useAtomValue } from 'jotai';
import { AnimatePresence } from 'framer-motion';
import { filteredEventsAtom, selectedDateAtom } from '../../../model/atoms';
import { NoEventsScreen } from './NoEventsScreen';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { enUS } from 'date-fns/locale/en-US';
import { customRu } from '@/shared/model/consts';

export const EventsList = () => {
  const { i18n } = useTranslation();

  const selectedDate = useAtomValue(selectedDateAtom);
  const filteredEvents = useAtomValue(filteredEventsAtom);

  const selectedEvents = filteredEvents[selectedDate.toDateString()];

  if (!selectedEvents || !selectedEvents.length) return <NoEventsScreen />;

  return (
    <div
      data-testid="event-list"
      className="flex flex-col gap-4 w-full overflow-auto h-[620px] pt-2 pl-[6px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500"
    >
      <h3 data-testid="calendar-day" className="font-bold self-center text-xl w-full max-w-[550px]">
        {format(selectedDate, 'PPP', { locale: i18n.language === 'ru' ? customRu : enUS })}
      </h3>
      <AnimatePresence mode="popLayout">
        {selectedEvents.map((event: TEvent) => (
          <Event key={event.id} event={event} editLink={`event/${event.id}/edit`} />
        ))}
      </AnimatePresence>
    </div>
  );
};
