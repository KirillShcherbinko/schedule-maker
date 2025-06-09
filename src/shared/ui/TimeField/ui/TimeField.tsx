import { useController, useFormContext } from 'react-hook-form';
import { Input } from '@/shared/ui/Input';
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/Popover';
import { Button } from '@/shared/ui/Button';
import { ScrollArea } from '@/shared/ui/ScrollArea';
import { cn } from '@/shared/lib/utils';
import { Clock } from 'lucide-react';
import { hours, minutes } from '../model/consts';

type TimeFieldProps = {
  name: string;
  label: string;
  className?: string;
};

export const TimeField = ({ name, label, className }: TimeFieldProps) => {
  const { control } = useFormContext();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const [selectedHour = '00', selectedMinute = '00'] = (value || '').split(':');

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <div className="relative">
        <Input readOnly className={`${className} pr-10`} value={value || ''} placeholder="HH:MM" />
        <Popover modal={true}>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full size-7">
              <Clock className="size-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-2 flex gap-2 w-auto border-0 overflow-auto" align="end">
            <ScrollArea className="h-40 w-14">
              {hours.map((hour) => (
                <div
                  key={hour}
                  onClick={() => onChange(`${hour}:${selectedMinute}`)}
                  className={cn(
                    'cursor-pointer px-2 py-1 rounded hover:bg-accent',
                    hour === selectedHour && 'bg-primary text-primary-foreground hover:bg-primary',
                  )}
                >
                  {hour}
                </div>
              ))}
            </ScrollArea>
            <ScrollArea className="h-40 w-14">
              {minutes.map((minute) => (
                <div
                  key={minute}
                  onClick={() => onChange(`${selectedHour}:${minute}`)}
                  className={cn(
                    'cursor-pointer px-2 py-1 rounded hover:bg-accent',
                    minute === selectedMinute && 'bg-primary text-primary-foreground hover:bg-primary',
                  )}
                >
                  {minute}
                </div>
              ))}
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
      {error && <p className="text-sm text-destructive">{error.message}</p>}
    </div>
  );
};
