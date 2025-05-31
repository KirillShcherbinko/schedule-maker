import { useWindowWidth } from '@/shared/lib/hooks/useWindowWidth';
import { Calendar } from '@/shared/ui/Calendar';
import { currentData } from '../../model/atoms';
import { useAtom } from 'jotai';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover/Popover';
import { Button } from '@/shared/ui/Button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const BREAKING_WIDTH = 748;

export const AdaptiveCalendar = () => {
  const width = useWindowWidth();
  const isBreakingWidth = width > BREAKING_WIDTH;
  const [date, setDate] = useAtom(currentData);

  const handleSelectedDate = (selectedDate: Date | undefined) => {
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <div className="p-0 flex flex-col">
      {isBreakingWidth ? (
        <Calendar mode="single" selected={date} onSelect={handleSelectedDate} initialFocus />
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full self-center justify-center text-center font-normal p  l-10 pr-10">
              <CalendarIcon />
              {format(date, 'PPP')}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar mode="single" selected={date} onSelect={handleSelectedDate} initialFocus />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};
