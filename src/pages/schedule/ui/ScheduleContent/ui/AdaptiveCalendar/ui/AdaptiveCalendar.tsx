import { useWindowWidth } from '@/shared/lib/hooks/useWindowWidth';
import { Calendar } from '@/shared/ui/Calendar';
import { selectedDateAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/Popover';
import { Button } from '@/shared/ui/Button';
import { CalendarIcon } from 'lucide-react';
import { CalendarButton } from './CalendarButton/ui/CalendarButton';
import { BREAKING_WIDTH } from '../model/consts';

export const AdaptiveCalendar = () => {
  const width = useWindowWidth();
  const [date, setDate] = useAtom(selectedDateAtom);

  const handleSelectedDate = (selectedDate: Date | undefined) => {
    if (selectedDate) setDate(selectedDate);
  };

  return (
    <div className="p-0 flex flex-col" data-testid="calendar-container">
      {width > BREAKING_WIDTH ? (
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
            <Button className="h-10 w-10 self-center justify-center text-center font-normal rounded-full">
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-0" align="start">
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
