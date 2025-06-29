import { eventFormSchema, type TEventFormData } from '@/entities/event';
import { useEventStore } from '@/entities/event';
import { zodResolver } from '@hookform/resolvers/zod';
import { t } from 'i18next';
import { format } from 'date-fns';
import { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

type EventFormProviderProps = {
  children: ReactNode;
};

export const EventFormProvider = ({ children }: EventFormProviderProps) => {
  const editedEvent = useEventStore((state) => state.editedEvent);

  const methods = useForm<TEventFormData>({
    resolver: zodResolver(eventFormSchema(t)),
    defaultValues: {
      title: editedEvent?.title || '',
      date: editedEvent ? format(editedEvent.startTime, 'yyyy-MM-dd') : '',
      startTime: editedEvent ? format(editedEvent.startTime, 'HH:mm') : '',
      endTime: editedEvent ? format(editedEvent.endTime, 'HH:mm') : '',
      tagIds: editedEvent?.tags.map((tag) => tag.id) || [],
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
