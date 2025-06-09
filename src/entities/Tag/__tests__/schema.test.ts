import { describe, expect, it } from 'vitest';
import { tagFormSchema } from '../model/schema'; // путь подкорректируй
import type { TTagFormData } from '../model/schema';
import { TAG_VALIDATION_LINK } from '../model/consts';
import type { TFunction } from 'i18next';

const mockT = ((key: string) => `msg:${key}`) as TFunction;
const msg = (key: string) => `msg:${TAG_VALIDATION_LINK}.${key}`;

describe('tagFormSchema', () => {
  const schema = tagFormSchema(mockT);

  const baseData: TTagFormData = {
    title: 'Тег',
    color: 'sky',
  };

  it('валидирует корректные данные', () => {
    const result = schema.safeParse(baseData);
    expect(result.success).toBe(true);
  });

  it('отклоняет пустой заголовок', () => {
    const result = schema.safeParse({ ...baseData, title: '' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe(msg('titleRequired'));
  });

  it('отклоняет слишком длинный заголовок', () => {
    const result = schema.safeParse({ ...baseData, title: 'a'.repeat(51) });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe(msg('titleTooLong'));
  });

  it('отклоняет некорректный цвет', () => {
    const result = schema.safeParse({ ...baseData, color: 'wrongColor' });
    expect(result.success).toBe(false);
    expect(result.error?.errors[0].message).toBe(msg('invalidColor'));
  });
});
