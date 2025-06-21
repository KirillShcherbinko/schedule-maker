import type { i18n } from 'i18next';
import { z } from 'zod';
import { TAG_NAMESPACE, TAG_VALIDATION_LINK } from './consts';

export const tagFormSchema = (t: i18n['t']) => {
  const allowedColors = [
    'sky',
    'grass',
    'lemon',
    'peach',
    'lavender',
    'mint',
    'rose',
    'sand',
    'ice',
    'plum',
    'ocean',
    'moss',
    'amber',
    'coral',
    'jade',
    'blush',
  ] as const;

  return z.object({
    title: z
      .string()
      .min(1, t(`${TAG_VALIDATION_LINK}.titleRequired`, TAG_NAMESPACE))
      .max(50, t(`${TAG_VALIDATION_LINK}.titleTooLong`, TAG_NAMESPACE)),
    color: z.enum(allowedColors, {
      errorMap: () => ({ message: t(`${TAG_VALIDATION_LINK}.invalidColor`, TAG_NAMESPACE) }),
    }),
  });
};

export type TTagFormData = z.infer<ReturnType<typeof tagFormSchema>>;
