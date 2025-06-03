import { useWindowWidth } from '@/shared/lib/hooks/useWindowWidth';
import { Calendar } from '@/shared/ui/Calendar';
import { selectedDateAtom } from '../../model/atoms';
import { useAtom } from 'jotai';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover';
import { Button } from '@/shared/ui/Button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { CalendarButton } from './ui/CalendarButton/CalendarButton';

const BREAKING_WIDTH = 768;

export const AdaptiveCalendar = () => {
  const width = useWindowWidth();
  const isBreakingWidth = width > BREAKING_WIDTH;

  const [date, setDate] = useAtom(selectedDateAtom);

  const handleSelectedDate = (selectedDate: Date | undefined) => {
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <div className="p-0 flex flex-col">
      {isBreakingWidth ? (
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelectedDate}
          components={{ DayContent: CalendarButton }}
          initialFocus
        />
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full self-center justify-center text-center font-normal pl-10 pr-10">
              <CalendarIcon />
              {format(date, 'PPP')}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleSelectedDate}
              components={{ DayContent: CalendarButton }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};
