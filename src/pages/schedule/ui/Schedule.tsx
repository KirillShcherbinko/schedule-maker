import { Header } from '@/widgets/header/Header';
import { AdaptiveCalendar } from './adaptive-calendar';
import { EventList } from './event-list';

export const Schedule = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-between md:items-start md:flex-row mt-25">
        <AdaptiveCalendar />
        <EventList />
      </div>
    </div>
  );
};
