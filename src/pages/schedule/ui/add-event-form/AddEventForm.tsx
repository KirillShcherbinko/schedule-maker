import { atom, useAtom } from 'jotai';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui/Dialog';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { useTagStore, useEventsStore } from '../../model/store';
import type { TEvent, TTag } from '@/shared/model/types';

const eventFormOpenAtom = atom(false);

const addEventFormSchema = z.object({
  title: z.string().min(1, 'Название обязательно'),
  tagIds: z.array(z.number()).optional(), // Массив id тегов (может быть пустым)
});

type AddEventFormValues = z.infer<typeof addEventFormSchema>;

export const AddEventForm = () => {
  const [open, setOpen] = useAtom(eventFormOpenAtom);

  const tags = useTagStore((state) => state.tags);
  const addEvent = useEventsStore((state) => state.addEvent);

  const form = useForm<AddEventFormValues>({
    resolver: zodResolver(addEventFormSchema),
    defaultValues: {
      title: '',
      tagIds: [],
    },
  });

  const handleSubmit = (values: AddEventFormValues) => {
    const selectedTags: TTag[] = tags.filter((tag) => values.tagIds?.includes(tag.id)); // фильтруем выбранные теги

    const newEvent: TEvent = {
      id: Date.now(), // или по-другому генерировать id
      scheduleId: 1, // Здесь можно передавать из пропсов или контекста
      title: values.title,
      startTime: new Date(), // Время по умолчанию
      endTime: new Date(), // Время по умолчанию
      tags: selectedTags,
    };

    addEvent(newEvent);

    setOpen(false);
    form.reset();
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Добавить событие</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Новое событие</DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div>
              <label>Название события</label>
              <Input {...form.register('title')} />
              {form.formState.errors.title && <p className="text-red-500">{form.formState.errors.title.message}</p>}
            </div>

            <div>
              <label>Теги</label>
              <Controller
                control={form.control}
                name="tagIds"
                render={({ field }) => {
                  // field.value у нас number[] | undefined — надо конвертировать в string[]
                  const valueAsStringArray = (field.value ?? []).map(String);

                  return (
                    <select
                      {...field}
                      multiple
                      className="w-full border rounded p-2"
                      value={valueAsStringArray}
                      onChange={(e) => {
                        const selectedValues = Array.from(e.target.selectedOptions).map((opt) => Number(opt.value));
                        field.onChange(selectedValues);
                      }}
                    >
                      {tags.map((tag) => (
                        <option key={tag.id} value={String(tag.id)}>
                          {tag.title}
                        </option>
                      ))}
                    </select>
                  );
                }}
              />
            </div>

            <Button type="submit">Создать</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
