import { Header } from '@/widgets/header';
import { EventsList } from '@/widgets/events-list';
import { TagsList } from '@/widgets/tags-list';
import { useEventStore } from '@/entities/event';
import { AddEventButton } from '@/features/add-event-button';
import { useAtom, useAtomValue } from 'jotai';
import { filteredEventsAtom, selectedDateAtom, tagFilterAtom, titleFilterAtom } from '../model/atoms';
import { SCHEDULE_CONTENT_NAMESPACE, TITLE_SEARCH_PLACEHOLDER_LINK } from '../model/consts';
import { FilterByTitle } from '@/features/filter-by-title';
import { useTranslation } from 'react-i18next';
import { CalendarWithEventsCounter } from '@/widgets/calendar-with-events-counter';
import { cn } from '@/shared/lib/utils';

export const ScheduleContent = () => {
  const { t } = useTranslation();

  const error = useEventStore((state) => state.error);
  if (error) console.log(error);

  const filteredEvents = useAtomValue(filteredEventsAtom);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);

  const [title, setTitle] = useAtom(titleFilterAtom);
  const [, setFilteredTags] = useAtom(tagFilterAtom);

  return (
    <div className="flex flex-col">
      <Header />
      <div
        className={cn(
          'flex flex-col items-center justify-start md:justify-between md:items-start md:flex-row',
          'mt-20 bg-block-primary p-5 rounded-2xl min-h-[740px]',
        )}
      >
        <div className="flex flex-row items-start justify-center md:flex-col p-2 md:p-0 gap-2 w-full md:w-auto">
          <CalendarWithEventsCounter date={selectedDate} setDate={setSelectedDate} />
          <TagsList filterTags={setFilteredTags} />
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <div className="flex justify-center items-center gap-2 p-2 w-full">
            <AddEventButton />
            <FilterByTitle
              baseTitle={title}
              onFilterChange={setTitle}
              placeholder={t(TITLE_SEARCH_PLACEHOLDER_LINK, SCHEDULE_CONTENT_NAMESPACE)}
            />
          </div>
          <EventsList selectedDate={selectedDate} events={filteredEvents} />
        </div>
      </div>
    </div>
  );
};
