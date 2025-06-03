import type { DayContentProps } from 'react-day-picker';


export const CalendarButton = (props: DayContentProps) => {
  const { date } = props;

  return (
    <span style={{ position: "relative", overflow: "visible" }}>
      {date.getDate()}

    </span>
  );
};
