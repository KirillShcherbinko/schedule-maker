import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { ru } from 'date-fns/locale/ru';
import { enUS } from 'date-fns/locale/en-US';
import type { Locale } from 'date-fns';
import { cn } from '@/shared/lib/utils';
import { buttonVariants } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

const customRu: Locale = {
  ...ru,
  localize: {
    ...ru.localize,
    month: (n, opts) => {
      const name = ru.localize.month(n, opts);
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    day: (n, opts) => {
      const name = ru.localize.day(n, opts);
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};

function Calendar({ className, classNames, showOutsideDays = true, ...props }: React.ComponentProps<typeof DayPicker>) {
  const { i18n } = useTranslation();

  return (
    <DayPicker
      locale={i18n.language === 'ru' ? customRu : enUS}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-sm sm:text-md md:text-lg lg:text-xl font-medium text-capitalize',
        nav: 'flex items-center gap-1',
        nav_button: cn(buttonVariants({ variant: null }), 'size-10 bg-transparent p-0 opacity-50 hover:opacity-100'),
        nav_button_previous: 'absolute left-10 sm:left-19 md:left-26 lg:left-40',
        nav_button_next: 'absolute right-10 sm:right-19 md:right-26 lg:right-40',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex justify-around',
        head_cell:
          'text-muted-foreground rounded-md w-8 font-normal text-sm sm:text-md md:text:lg lg:text-xl text-capitalize',
        row: 'flex w-full mt-2 gap-2',
        cell: cn(
          'relative p-0 text-center lg:text-xl focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'size-8 sm:size-12 md:size-14 lg:size-18 p-0 font-normal text-sm sm:text-md md:text-lg lg:text-xl aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground',
        ),
        day_range_start: 'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_range_end: 'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        day_outside: 'day-outside text-muted-foreground aria-selected:text-muted-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn('size-4 md:size-5 lg:size-7', className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn('size-4 md:size-5 lg:size-7', className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
