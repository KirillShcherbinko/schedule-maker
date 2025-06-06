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
      <div className="flex flex-col items-center justify-start md:justify-between md:items-start md:flex-row mt-20 bg-block-primary p-5 rounded-2xl min-h-[740px]">
        <div className="flex flex-row items-start justify-center md:flex-col p-2 md:p-0 gap-2 w-full md:w-auto">
          <AdaptiveCalendar />
          <TagsList />
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <div className="flex justify-center items-center gap-2 p-2 w-full">
            <AddEventButton />
            <TitleSearch />
          </div>
          <EventsList />
        </div>
      </div>
      <AddEventForm />
    </div>
  );
};
