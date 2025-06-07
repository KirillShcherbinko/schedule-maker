import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEventStore } from '@/entities/Event/model/store';
import type { TEvent } from '@/entities/Event/model/types';
import type { TTag } from '@/entities/Tag/model/types';
import { eventFormSchema, type EventFormData } from '@/entities/Event/model/schema';
import { useTagStore } from '@/entities/Tag/model/store';
import { useTranslation } from 'react-i18next';
import { ModalFormLayout } from '@/widgets/ModalFormLayout';
import { format } from 'date-fns';
import { BASE_NAMESPACE } from '@/pages/schedule/config/const';
import { EVENT_FORM_LINK, nanoid } from '../model/consts';
import { FormField } from '@/widgets/FormField';
import { useParams } from 'react-router-dom';
import { isEventFormOpenAtom } from '@/pages/schedule/model/atoms';
import { useAtom } from 'jotai';
import { DateField } from '@/widgets/DateField';
import { TimeField } from '@/widgets/TimeField';
import { TagController } from './TagController';

type EventFormProps = {
  mode: 'create' | 'edit';
  event?: TEvent;
};

export const EventForm = ({ mode, event }: EventFormProps) => {
  const { scheduleId } = useParams<{ scheduleId: string }>();

  const { t } = useTranslation();

  const [isFormOpen, setIsFormOpen] = useAtom(isEventFormOpenAtom);

  const tags = useTagStore((state) => state.tags);
  const addEvent = useEventStore((state) => state.addEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema(t)),
    defaultValues: {
      title: event?.title || '',
      date: event ? format(event.startTime, 'yyyy-MM-dd') : '',
      startTime: event ? format(event.startTime, 'HH:mm') : '',
      endTime: event ? format(event.endTime, 'HH:mm') : '',
      tagIds: event?.tags.map((tag) => tag.id) || [],
    },
  });

  const handleSubmit = (formValues: EventFormData) => {
    const { title, date, startTime, endTime, tagIds } = formValues;

    const selectedTags: TTag[] = tags.filter((tag) => tagIds?.includes(tag.id));
    const startDateTime = new Date(`${date}T${startTime}`);
    const endDateTime = new Date(`${date}T${endTime}`);

    const eventData: TEvent = {
      id: mode === 'edit' && event ? event.id : Number(nanoid()),
      scheduleId: scheduleId ? parseInt(scheduleId) : 1,
      title: title,
      startTime: startDateTime,
      endTime: endDateTime,
      tags: selectedTags,
    };

    if (mode === 'create') addEvent(eventData);
    else if (event) updateEvent(event, eventData);

    setIsFormOpen(false);
    form.reset();
  };

  return (
    <ModalFormLayout
      title={t(`${EVENT_FORM_LINK}.${mode}.title`, BASE_NAMESPACE)}
      formMethods={form}
      open={isFormOpen}
      onOpenChange={setIsFormOpen}
      onSubmit={form.handleSubmit(handleSubmit)}
      submitText={t(`${EVENT_FORM_LINK}.${mode}.submitButtonText`, BASE_NAMESPACE)}
    >
      <FormField name="title" label={t(`${EVENT_FORM_LINK}.title`, BASE_NAMESPACE)} />
      <DateField name="date" label={t(`${EVENT_FORM_LINK}.date`, BASE_NAMESPACE)} />
      <TimeField name="startTime" label={t(`${EVENT_FORM_LINK}.startTime`, BASE_NAMESPACE)} />
      <TimeField name="endTime" label={t(`${EVENT_FORM_LINK}.endTime`, BASE_NAMESPACE)} />
      <TagController control={form.control} />
    </ModalFormLayout>
  );
};
