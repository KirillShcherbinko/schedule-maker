import { useEventStore } from '@/entities/Event/model/store';
import { type TEventFormData } from '@/entities/Event/model/schema';
import { useTranslation } from 'react-i18next';
import { BASE_NAMESPACE } from '../config/consts';
import { editMode, EVENT_FORM_LINK } from '../model/consts';
import { FormField } from '@/shared/ui/FormField';
import { DateField } from '@/shared/ui/DateField';
import { TimeField } from '@/shared/ui/TimeField';
import { TagController } from './TagController';
import type { TMode } from '../model/types';
import { useEventSubmit } from '../lib/hooks/useEventSubmit';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useTagStore } from '@/entities/Tag/model/store';

type EventFormProps = {
  mode: TMode;
};

export const EventForm = ({ mode }: EventFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleEventSubmit = useEventSubmit();

  const { scheduleId } = useParams<{ scheduleId: string }>();
  const editedEvent = useEventStore((state) => state.editedEvent);
  const tags = useTagStore((state) => state.tags);

  const { handleSubmit, formState, reset } = useFormContext<TEventFormData>();
  const { dirtyFields } = formState;

  const onSubmit = (formValues: TEventFormData) => {
    const isSuccess = handleEventSubmit(mode, formValues, dirtyFields, editedEvent, tags, scheduleId);

    if (isSuccess) {
      navigate(-1);
      setTimeout(() => {
        if (mode === editMode) {
          useEventStore.setState({ editedEvent: undefined });
        }
        reset();
      }, 0);
    }
  };

  return (
    <form id="event-modal-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-labelledby="dialog-title">
      <FormField name="title" label={t(`${EVENT_FORM_LINK}.title`, BASE_NAMESPACE)} />
      <DateField name="date" label={t(`${EVENT_FORM_LINK}.date`, BASE_NAMESPACE)} />
      <TimeField name="startTime" label={t(`${EVENT_FORM_LINK}.startTime`, BASE_NAMESPACE)} />
      <TimeField name="endTime" label={t(`${EVENT_FORM_LINK}.endTime`, BASE_NAMESPACE)} />
      <TagController />
      <Button type="submit">{t(`${EVENT_FORM_LINK}.${mode}.submitButtonText`, BASE_NAMESPACE)}</Button>
    </form>
  );
};
