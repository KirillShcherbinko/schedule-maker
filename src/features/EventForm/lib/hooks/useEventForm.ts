import { type EventFormData, eventFormSchema } from '@/entities/Event/model/schema';
import { useEventStore } from '@/entities/Event/model/store';
import { useTagStore } from '@/entities/Tag/model/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const useEventForm = () => {
  const { t } = useTranslation();

  const { scheduleId } = useParams<{ scheduleId: string }>();
  const editedEvent = useEventStore((state) => state.editedEvent);
  const tags = useTagStore((state) => state.tags);

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema(t)),
    defaultValues: {
      title: editedEvent?.title || '',
      date: editedEvent ? format(editedEvent.startTime, 'yyyy-MM-dd') : '',
      startTime: editedEvent ? format(editedEvent.startTime, 'HH:mm') : '',
      endTime: editedEvent ? format(editedEvent.endTime, 'HH:mm') : '',
      tagIds: editedEvent?.tags.map((tag) => tag.id) || [],
    },
  });

  return { form, tags, scheduleId, editedEvent };
};
