import { describe, it, expect } from 'vitest';
import { addEvent, editEventsList } from '../lib/utils';
import type { TEvent, TEventsList } from '../model/types';

const mockEvent = (id: number, start: string, end: string, scheduleId = 1, title = `Event ${id}`): TEvent => {
  const event: TEvent = {
    id,
    scheduleId,
    title,
    startTime: new Date(start),
    endTime: new Date(end),
    tags: [],
  };
  return event;
};

describe('addEvent', () => {
  it('добавляет событие в пустой список', () => {
    const event = mockEvent(1, '2025-06-09T10:00', '2025-06-09T11:00');
    const result = addEvent(event, []);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  it('вставляет событие в правильное место по времени', () => {
    const event1 = mockEvent(1, '2025-06-09T12:00', '2025-06-09T13:00');
    const event2 = mockEvent(2, '2025-06-09T10:00', '2025-06-09T11:00');
    const result = addEvent(event2, [event1]);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(1);
  });

  it('добавляет в конец если позже всех', () => {
    const event1 = mockEvent(1, '2025-06-09T09:00', '2025-06-09T10:00');
    const event2 = mockEvent(2, '2025-06-09T11:00', '2025-06-09T12:00');
    const result = addEvent(event2, [event1]);
    expect(result.map((e) => e.id)).toEqual([1, 2]);
  });

  it('вызывает ошибку при пересечении времени', () => {
    const event1 = mockEvent(1, '2025-06-09T10:00', '2025-06-09T11:00');
    const event2 = mockEvent(2, '2025-06-09T10:30', '2025-06-09T11:30');
    expect(() => addEvent(event2, [event1])).toThrow('Пересечение с существующим событием');
  });

  it('не вызывает ошибку при одинаковом времени начала и конца (но разных id)', () => {
    const event1 = mockEvent(1, '2025-06-09T10:00', '2025-06-09T11:00');
    const event2 = mockEvent(2, '2025-06-09T10:00', '2025-06-09T11:00');
    expect(() => addEvent(event2, [event1])).not.toThrow();
  });
});

describe('editEventsList', () => {
  const date = new Date('2025-06-09T00:00');
  const key = date.toDateString();

  it('обновляет список событий на дату через callback', () => {
    const event = mockEvent(1, '2025-06-09T09:00', '2025-06-09T10:00');
    const events: TEventsList = {};
    const { events: newEvents, error } = editEventsList(events, date, () => [event]);

    expect(error).toBeNull();
    expect(newEvents[key]).toHaveLength(1);
    expect(newEvents[key][0].id).toBe(1);
  });

  it('сохраняет старые данные если callback кидает ошибку', () => {
    const event = mockEvent(1, '2025-06-09T09:00', '2025-06-09T10:00');
    const events: TEventsList = { [key]: [event] };

    const { events: newEvents, error } = editEventsList(events, date, () => {
      throw new Error('Test error');
    });

    expect(error).toBe('Test error');
    expect(newEvents).toEqual(events);
  });

  it('возвращает общее сообщение если ошибка не instance of Error', () => {
    const event = mockEvent(1, '2025-06-09T09:00', '2025-06-09T10:00');
    const events: TEventsList = { [key]: [event] };

    const { error } = editEventsList(events, date, () => {
      throw 'Unknown error';
    });

    expect(error).toBe('Error');
  });
});
