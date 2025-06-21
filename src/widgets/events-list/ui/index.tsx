import NoEventsScreenImage from '@/shared/assets/no-events-screen.png';
import type { TEvent, TEventsList } from '@/entities/event';
import { Event } from '@/entities/event';
import { AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { enUS } from 'date-fns/locale/en-US';
import { customRu } from '@/shared/model/consts';
import { EVENTS_LIST_NAMESPACE, NO_EVENTS_SCREEN_TITLE_LINK } from '../model/consts';
import { EditButtonGroup } from '@/features/edit-button-group';
import { cn } from '@/shared/lib/utils';

type EventsListProps = {
  events: TEventsList;
  selectedDate: Date;
};

export const EventsList = ({ events, selectedDate }: EventsListProps) => {
  const { i18n, t } = useTranslation();
  const selectedEvents = events[selectedDate.toDateString()];

  return (
    <div
      data-testid="event-list"
      className={cn(
        'flex flex-col gap-4 w-full overflow-auto h-[620px] pt-2 pl-[6px]',
        'scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500',
      )}
    >
      <h3 data-testid="calendar-day" className="font-bold self-center text-xl w-full max-w-[550px]">
        {format(selectedDate, 'PPP', { locale: i18n.language === 'ru' ? customRu : enUS })}
      </h3>
      {!selectedEvents || !selectedEvents.length ? (
        <>
          <img className="w-md self-center" src={NoEventsScreenImage} alt="No events screen" />
          <h3 className="font-bold text-4xl text-center">{t(NO_EVENTS_SCREEN_TITLE_LINK, EVENTS_LIST_NAMESPACE)}</h3>
        </>
      ) : (
        <AnimatePresence mode="popLayout">
          {selectedEvents.map((event: TEvent) => (
            <Event key={event.id} event={event}>
              <EditButtonGroup itemType="event" item={event} editFormPath={`event/${event.id}/edit`} />
            </Event>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
};
