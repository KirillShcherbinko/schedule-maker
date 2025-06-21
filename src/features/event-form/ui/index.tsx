import { useEventStore } from '@/entities/event';
import { type TEventFormData } from '@/entities/event';
import { useTranslation } from 'react-i18next';
import { editMode, EVENT_FORM_LINK, EVENT_FORM_NAMESPACE } from '../model/consts';
import { FormInput } from '@/shared/ui/form-input';
import { DateInput } from '@/shared/ui/date-input';
import { TimeInput } from '@/shared/ui/time-input';
import { TagController } from './tag-controller';
import type { TMode } from '../model/types';
import { useEventSubmit } from '../lib/hooks';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/shared/ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { useTagStore } from '@/entities/tag';

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
      <FormInput name="title" label={t(`${EVENT_FORM_LINK}.title`, EVENT_FORM_NAMESPACE)} />
      <DateInput name="date" label={t(`${EVENT_FORM_LINK}.date`, EVENT_FORM_NAMESPACE)} />
      <TimeInput name="startTime" label={t(`${EVENT_FORM_LINK}.startTime`, EVENT_FORM_NAMESPACE)} />
      <TimeInput name="endTime" label={t(`${EVENT_FORM_LINK}.endTime`, EVENT_FORM_NAMESPACE)} />
      <TagController />
      <Button type="submit">{t(`${EVENT_FORM_LINK}.${mode}.submitButtonText`, EVENT_FORM_NAMESPACE)}</Button>
    </form>
  );
};
