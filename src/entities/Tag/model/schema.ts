import type { i18n } from 'i18next';
import { z } from 'zod';
import { BASE_NAMESPACE } from '../config/consts';
import { TAG_VALIDATION_LINK } from './consts';

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
      .min(1, t(`${TAG_VALIDATION_LINK}.titleRequired`, BASE_NAMESPACE))
      .max(50, t(`${TAG_VALIDATION_LINK}.titleTooLong`, BASE_NAMESPACE)),
    color: z.enum(allowedColors, {
      errorMap: () => ({ message: t(`${TAG_VALIDATION_LINK}.invalidColor`, BASE_NAMESPACE) }),
    }),
  });
};

export type TTagFormData = z.infer<ReturnType<typeof tagFormSchema>>;
