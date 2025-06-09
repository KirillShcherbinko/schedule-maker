import { describe, expect, it } from 'vitest';
import { eventFormSchema } from '../model/schema';
import { EVENT_VALIDATION_LINK } from '../model/consts';
import type { TFunction } from 'i18next';

const mockT = ((key: string) => `msg:${key}`) as TFunction;
const msg = (key: string) => `msg:${EVENT_VALIDATION_LINK}.${key}`;

describe('eventFormSchema', () => {
  const schema = eventFormSchema(mockT);

  const baseData = {
    title: 'Пример события',
    date: '2025-01-01',
    startTime: '10:00',
    endTime: '11:00',
    tagIds: [1, 2],
  };

  it('валидирует корректные данные', () => {
    const result = schema.safeParse(baseData);
    expect(result.success).toBe(true);
  });

  it('отклоняет пустой заголовок', () => {
    const result = schema.safeParse({ ...baseData, title: '' });
    expect(result.success).toBe(false);
    expect(result.error?.format().title?._errors[0]).toBe(msg('titleRequired'));
  });

  it('отклоняет слишком длинный заголовок', () => {
    const result = schema.safeParse({ ...baseData, title: 'a'.repeat(101) });
    expect(result.success).toBe(false);
    expect(result.error?.format().title?._errors[0]).toBe(msg('titleTooLong'));
  });

  it('отклоняет пустую дату', () => {
    const result = schema.safeParse({ ...baseData, date: '' });
    expect(result.success).toBe(false);
    expect(result.error?.format().date?._errors[0]).toBe(msg('dateRequired'));
  });

  it('отклоняет пустое startTime', () => {
    const result = schema.safeParse({ ...baseData, startTime: '' });
    expect(result.success).toBe(false);
    expect(result.error?.format().startTime?._errors[0]).toBe(msg('startTimeRequired'));
  });

  it('отклоняет пустое endTime', () => {
    const result = schema.safeParse({ ...baseData, endTime: '' });
    expect(result.success).toBe(false);
    expect(result.error?.format().endTime?._errors[0]).toBe(msg('endTimeRequired'));
  });

  it('отклоняет если endTime раньше startTime', () => {
    const result = schema.safeParse({ ...baseData, startTime: '12:00', endTime: '11:00' });
    expect(result.success).toBe(false);
    expect(result.error?.format().endTime?._errors[0]).toBe(msg('endTimeAfterStart'));
  });

  it('разрешает отсутствие tagIds', () => {
    const result = schema.safeParse({ ...baseData, tagIds: undefined });
    expect(result.success).toBe(true);
  });

  it('отклоняет нечисловые значения в tagIds', () => {
    const result = schema.safeParse({ ...baseData, tagIds: ['a' as any] });
    expect(result.success).toBe(false);
  });
});
