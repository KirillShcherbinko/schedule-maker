import { eventsAtom, selectedDateAtom } from '@/pages/schedule/model/atoms';
import { cn } from '@/shared/lib/utils';
import { useAtom } from 'jotai';
import type { DayContentProps } from 'react-day-picker';

export const CalendarButton = (props: DayContentProps) => {
  const { date } = props;
  const strDate = date.toDateString();

  const [{ events }] = useAtom(eventsAtom);
  const [selectedDate] = useAtom(selectedDateAtom);

  const numberOfEvents = Object.keys(events).includes(strDate) ? events[strDate].length : 0;

  return (
    <span className="box-border flex flex-col items-center w-full p-0 pb-1">
      <p className="">{date.getDate()}</p>
      {numberOfEvents ? (
        <div className={cn(
          "flex items-center justify-center rounded-full size-4.5 md:size-5 lg:size-6 text-md md:text-lg",
          strDate === selectedDate.toDateString() ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground'
          )}>
          {numberOfEvents}
        </div>
      ) : (
        <p className="size-4.5 md:size-5 lg:size-7">{'\u00A0'}</p>
      )}
    </span>
  );
};
