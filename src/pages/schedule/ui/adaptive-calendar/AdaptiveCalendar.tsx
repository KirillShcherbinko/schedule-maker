import { useWindowWidth } from '@/shared/lib/useWindowWidth';
import { Calendar } from '@/shared/ui/Calendar';
import { currentData } from '../../model/atoms';
import { useAtom } from 'jotai';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover';
import { Button } from '@/shared/ui/Button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

const BREAKING_WIDTH = 768;

export const AdaptiveCalendar = () => {
  const width = useWindowWidth();
  const isBreakingWidth = width > BREAKING_WIDTH;
  const [date, setDate] = useAtom(currentData);

  const handleSelectedDate = (selectedDate: Date | undefined) => {
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <div className="pt-10">
      {isBreakingWidth ? (
        <Calendar mode="single" selected={date} onSelect={handleSelectedDate} />
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'outline'} className="max-w-[240px] w-md justify-center text-center font-normal">
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
