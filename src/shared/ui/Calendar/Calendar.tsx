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

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const { i18n } = useTranslation();

  return (
    <DayPicker
      locale={i18n.language === 'ru' ? customRu : enUS}
      showOutsideDays={showOutsideDays}
      className={cn('p-1 sm:p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-between pt-1 items-center w-full',
        caption_label: 'text-md md:text-lg lg:text-xl font-medium text-capitalize m-0 pl-2 lg:pl-4',
        nav: 'flex items-center gap-1',
        nav_button: cn(buttonVariants({ variant: null }), 'size-10 bg-transparent p-0 opacity-50 hover:opacity-100'),
        nav_button_previous: 'p-0',
        nav_button_next: 'p-0',
        table: 'w-full space-x-1',
        head_row: 'flex justify-between',
        head_cell:
          'text-muted-foreground rounded-md w-8 md:w-10 lg:w-14 font-normal text-sm sm:text-md md:text:lg lg:text-xl text-capitalize',
        row: 'flex justify-between w-full mt-2',
        cell: cn(
          'relative p-0 text-center focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'px-2 py-1 font-normal text-md md:text-lg lg:text-xl aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground w-8 md:w-10 lg:w-14 max-w-[56px] h-full',
        ),
        day_range_start: 'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_range_end: 'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_selected:
          'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'border-2 border-primary text-accent-foreground',
        day_outside: 'day-outside text-muted-foreground aria-selected:text-primary-foreground',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        ...components,
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
