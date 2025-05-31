import { useAtom } from 'jotai';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/Dialog';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { eventFormOpenAtom } from '../../model/atoms';
import { useTagStore, useEventsStore } from '../../model/store';
import type { TEvent, TTag } from '@/shared/model/types';

import { eventFormSchema, type EventFormData } from '@/entities/event/model/schemas'; // ← your import

export const AddEventForm = () => {
  const [open, setOpen] = useAtom(eventFormOpenAtom);

  const tags = useTagStore((state) => state.tags);
  const addEvent = useEventsStore((state) => state.addEvent);

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      title: '',
      date: '',
      startTime: '',
      endTime: '',
      tagIds: [],
    },
  });

  const handleSubmit = (values: EventFormData) => {
    const selectedTags: TTag[] = tags.filter((tag) => values.tagIds?.includes(tag.id));

    const startDateTime = new Date(`${values.date}T${values.startTime}`);
    const endDateTime = new Date(`${values.date}T${values.endTime}`);

    const newEvent: TEvent = {
      id: Date.now(),
      scheduleId: 1,
      title: values.title,
      startTime: startDateTime,
      endTime: endDateTime,
      tags: selectedTags,
    };

    addEvent(newEvent);

    setOpen(false);
    form.reset();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Event</DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div>
              <label>Event Title</label>
              <Input {...form.register('title')} />
              {form.formState.errors.title && <p className="text-red-500">{form.formState.errors.title.message}</p>}
            </div>

            <div>
              <label>Date</label>
              <Input type="date" {...form.register('date')} />
              {form.formState.errors.date && <p className="text-red-500">{form.formState.errors.date.message}</p>}
            </div>

            <div>
              <label>Start Time</label>
              <Input type="time" {...form.register('startTime')} />
              {form.formState.errors.startTime && (
                <p className="text-red-500">{form.formState.errors.startTime.message}</p>
              )}
            </div>

            <div>
              <label>End Time</label>
              <Input type="time" {...form.register('endTime')} />
              {form.formState.errors.endTime && <p className="text-red-500">{form.formState.errors.endTime.message}</p>}
            </div>

            <div>
              <label>Tags (multiple selection allowed)</label>
              <Controller
                control={form.control}
                name="tagIds"
                render={({ field }) => (
                  <div className="flex flex-col gap-2">
                    {tags.map((tag) => (
                      <label key={tag.id} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={tag.id}
                          checked={field.value?.includes(tag.id)}
                          onChange={(e) => {
                            const isChecked = e.target.checked;
                            const id = tag.id;
                            const currentValue = field.value || [];
                            const newValue = isChecked ? [...currentValue, id] : currentValue.filter((v) => v !== id);
                            field.onChange(newValue);
                          }}
                        />
                        {tag.title}
                      </label>
                    ))}
                  </div>
                )}
              />
            </div>

            <Button type="submit">Create</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
