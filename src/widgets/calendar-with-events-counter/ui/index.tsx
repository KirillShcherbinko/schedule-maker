import { useWindowWidth } from '@/shared/lib/hooks';
import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Button } from '@/shared/ui/button';
import { CalendarIcon } from 'lucide-react';
import { EventsCounterCalendarButton } from '@/features/events-counter-calendar-button';
import { CALENDAR_WITH_EVENTS_COUNTER_BREAKING_WIDTH } from '../model/consts';
import type { DayContentProps } from 'react-day-picker';
import { useMemo } from 'react';

type CalendarWithEventsCounterProps = {
  date: Date;
  setDate: (date: Date) => void;
};

export const CalendarWithEventsCounter = ({ date, setDate }: CalendarWithEventsCounterProps) => {
  const width = useWindowWidth();

  const handleSelectedDate = (selectedDate: Date | undefined) => {
    if (selectedDate) setDate(selectedDate);
  };

  const CalendarComponent = useMemo(
    () => (
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelectedDate}
        components={{
          DayContent: (props: DayContentProps) => <EventsCounterCalendarButton {...props} selectedDate={date} />,
        }}
        initialFocus
      />
    ),
    [date, handleSelectedDate],
  );

  return (
    <div className="p-0 flex flex-col" data-testid="calendar-container">
      {width > CALENDAR_WITH_EVENTS_COUNTER_BREAKING_WIDTH ? (
        <>{CalendarComponent}</>
      ) : (
        <Popover>
          <PopoverTrigger asChild>
            <Button className="h-10 w-10 self-center justify-center text-center font-normal rounded-full">
              <CalendarIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 border-0" align="start">
            {CalendarComponent}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};
