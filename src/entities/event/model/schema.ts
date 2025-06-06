import type { i18n } from 'i18next';
import { z } from 'zod';
import { BASE_NAMESPACE } from '../config/consts';
import { EVENT_VALIDATION_LINK } from './consts';

export const eventFormSchema = (t: i18n['t']) => {
  return z
    .object({
      title: z
        .string()
        .min(1, t(`${EVENT_VALIDATION_LINK}.titleRequired`, BASE_NAMESPACE))
        .max(100, t(`${EVENT_VALIDATION_LINK}.titleTooLong`, BASE_NAMESPACE)),
      date: z.string().min(1, t(`${EVENT_VALIDATION_LINK}.dateRequired`, BASE_NAMESPACE)),
      startTime: z.string().min(1, t(`${EVENT_VALIDATION_LINK}.startTimeRequired`, BASE_NAMESPACE)),
      endTime: z.string().min(1, t(`${EVENT_VALIDATION_LINK}.endTimeRequired`, BASE_NAMESPACE)),
      tagIds: z.array(z.number()).optional(),
    })
    .refine(
      (data) => {
        const datePart = data.date;
        const start = new Date(`${datePart}T${data.startTime}`);
        const end = new Date(`${datePart}T${data.endTime}`);
        return start < end;
      },
      {
        message: t(`${EVENT_VALIDATION_LINK}.endTimeAfterStart`, BASE_NAMESPACE),
        path: ['endTime'],
      },
    );
};

export type EventFormData = z.infer<ReturnType<typeof eventFormSchema>>;
