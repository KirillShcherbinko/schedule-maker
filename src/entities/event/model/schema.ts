import type { i18n } from 'i18next';
import { z } from 'zod';
import { EVENT_NAMESPACE, EVENT_VALIDATION_LINK } from './consts';

export const eventFormSchema = (t: i18n['t']) => {
  return z
    .object({
      title: z
        .string()
        .min(1, t(`${EVENT_VALIDATION_LINK}.titleRequired`, EVENT_NAMESPACE))
        .max(100, t(`${EVENT_VALIDATION_LINK}.titleTooLong`, EVENT_NAMESPACE)),
      date: z.string().min(1, t(`${EVENT_VALIDATION_LINK}.dateRequired`, EVENT_NAMESPACE)),
      startTime: z.string().min(1, t(`${EVENT_VALIDATION_LINK}.startTimeRequired`, EVENT_NAMESPACE)),
      endTime: z.string().min(1, t(`${EVENT_VALIDATION_LINK}.endTimeRequired`, EVENT_NAMESPACE)),
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
        message: t(`${EVENT_VALIDATION_LINK}.endTimeAfterStart`, EVENT_NAMESPACE),
        path: ['endTime'],
      },
    );
};

export type TEventFormData = z.infer<ReturnType<typeof eventFormSchema>>;
