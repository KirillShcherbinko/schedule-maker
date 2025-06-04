import { Header } from '@/widgets/Header';
import { AdaptiveCalendar } from './AdaptiveCalendar';
import { EventsList } from './EventsList';
import { TitleSearch } from './TitleSearch';
import { TagsList } from './TagsList';
import { AddEventButton } from './AddEventButton';
import { AddEventForm } from './AddEventForm';

export const SchedulePage = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-between md:items-start md:flex-row mt-25 bg-block-primary p-5 rounded-2xl min-h-[740px]">
        <div className="flex flex-col w-full p-5 md:p-0 gap-5">
          <TagsList />
          <AdaptiveCalendar />
        </div>
        <div className="flex flex-col w-full p-5 gap-5">
          <TitleSearch />
          <EventsList />
        </div>
        <AddEventButton />
      </div>
      <AddEventForm />
    </div>
  );
};
