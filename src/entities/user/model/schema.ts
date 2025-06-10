import type { i18n } from 'i18next';
import { z } from 'zod';
import { BASE_NAMESPACE } from '../config/consts';
import { USER_VALIDATION_LINK } from './consts';

export const userFormSchema = (t: i18n['t']) => {
  return z.object({
    email: z.string().email(t(`${USER_VALIDATION_LINK}.emailRequired`, BASE_NAMESPACE)),
    password: z
      .string()
      .min(8, t(`${USER_VALIDATION_LINK}.passwordTooShort`, BASE_NAMESPACE))
      .max(32, t(`${USER_VALIDATION_LINK}.passwordTooLong`, BASE_NAMESPACE)),
  });
};

export type TUserFormData = z.infer<ReturnType<typeof userFormSchema>>;
