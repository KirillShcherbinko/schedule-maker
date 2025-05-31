import { Header } from '@/widgets/header/Header';
import { AdaptiveCalendar } from './adaptive-calendar';
import { EventList } from './event-list';
import { EventTitleFilter } from './event-title-filter';
import { TagsList } from './tags-list';
import { AddEventButton } from './add-event-button/AddEventButton';

export const Schedule = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-between md:items-start md:flex-row mt-25">
        <div className="flex flex-col w-full p-5 md:p-0 gap-5">
          <TagsList />
          <AdaptiveCalendar />
        </div>
        <div className="flex flex-col w-full p-5 gap-5">
          <EventTitleFilter />
          <EventList />
        </div>
        <AddEventButton />
      </div>
    </div>
  );
};
