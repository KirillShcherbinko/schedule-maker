import { useController, useFormContext } from 'react-hook-form';
import { Input } from '@/shared/ui/Input';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/Popover';
import { Calendar } from '@/shared/ui/Calendar';
import { format } from 'date-fns';
import { Button } from '@/shared/ui/Button';

type DateFieldProps = {
  name: string;
  label: string;
  className?: string;
};

export const DateField = ({ name, label, className }: DateFieldProps) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const selectedDate = new Date(value);

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <div className="relative">
        <Input readOnly className={`${className} pr-10`} value={value || ''} placeholder="YYYY-MM-DD" />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full size-7">
              <CalendarIcon className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-auto border-0" align="end">
            <Calendar
              mode="single"
              classNames={{
                month: 'flex flex-col gap-2',
                caption_label: 'text-md font-medium text-capitalize m-0 pl-2',
                head_cell: 'text-muted-foreground rounded-md w-8 font-normal text-sm text-capitalize',
                day: 'font-normal text-md aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground w-8 h-full rounded-md',
              }}
              components={{
                IconLeft: () => <ChevronLeft className="size-4" />,
                IconRight: () => <ChevronRight className="size-4" />,
              }}
              selected={selectedDate}
              onSelect={(date) => onChange(date ? format(date, 'yyyy-MM-dd') : '')}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
};
