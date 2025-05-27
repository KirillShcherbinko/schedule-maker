import { Header } from '@/widgets/header/Header';
import { AdaptiveCalendar } from './adaptive-calendar';

export const Schedule = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row mt-20">
        <AdaptiveCalendar />
        <p>События</p>
      </div>
    </div>
  );
};
