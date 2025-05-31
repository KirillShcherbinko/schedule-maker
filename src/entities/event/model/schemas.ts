import { z } from 'zod';

export const eventFormSchema = z
  .object({
    title: z.string().min(1, 'Event title is required').max(100, 'Event title cannot be longer than 100 characters'),
    date: z.date({
      required_error: 'Event date is required',
    }),
    startTime: z.string().min(1, 'Start time is required'),
    endTime: z.string().min(1, 'End time is required'),
    tagIds: z.array(z.number()).optional(),
  })
  .refine(
    (data) => {
      const start = new Date(`${data.date.toDateString()} ${data.startTime}`);
      const end = new Date(`${data.date.toDateString()} ${data.endTime}`);
      return start < end;
    },
    {
      message: 'End time must be later than start time',
      path: ['endTime'],
    },
  );

export type EventFormData = z.infer<typeof eventFormSchema>;
