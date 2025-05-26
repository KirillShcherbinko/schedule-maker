import { Calendar } from '@/shared/ui/Calendar';
import { Header } from '@/widgets/header/Header';
import { useAtom } from 'jotai';
import { currentData } from '../model/atoms';

export const Schedule = () => {
  const [date, setDate] = useAtom(currentData);

  const handleSelectedDate = (selectedDate: Date | undefined) => {
    if (selectedDate) setDate(selectedDate);
  }

  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row mt-20">
        <Calendar mode="single" className="w-[1000px]" selected={date} onSelect={handleSelectedDate} />
        <p>События</p>
      </div>
    </div>
  );
};
