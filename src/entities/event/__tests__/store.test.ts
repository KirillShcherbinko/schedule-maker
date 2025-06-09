import { beforeEach, describe, expect, it } from 'vitest';
import { useEventStore } from '../model/store';
import { groupEventsByDate } from '../lib/utils';
import { data } from '../model/consts';
import type { TEvent } from '../model/types';

describe('useEventStore', () => {
  beforeEach(() => {
    useEventStore.setState({
      events: groupEventsByDate(data.events),
      error: null,
      editedEvent: undefined,
    });
  });

  it('должен инициализироваться с событиями', () => {
    const events = useEventStore.getState().events;
    expect(events).toBeDefined();
    expect(Object.keys(events).length).toBeGreaterThan(0);
  });

  it('добавляет событие', () => {
    const event: TEvent = {
      id: 999,
      scheduleId: 1,
      title: 'Новое событие',
      startTime: new Date('2025-01-01T10:00:00'),
      endTime: new Date('2025-01-01T12:00:00'),
      tags: [],
    };

    useEventStore.getState().addEvent(event);
    const events = useEventStore.getState().events;

    const dateKey = new Date('2025-01-01').toDateString();
    expect(events[dateKey].some((e) => e.id === event.id)).toBe(true);
  });

  it('обновляет событие', () => {
    const oldEvent = data.events[0];
    const newTitle = 'Обновлённое название';

    useEventStore.getState().updateEvent(oldEvent, { title: newTitle });

    const dateKey = new Date(oldEvent.startTime).toDateString();
    const updated = useEventStore.getState().events[dateKey].find((e) => e.id === oldEvent.id);

    expect(updated?.title).toBe(newTitle);
  });

  it('удаляет событие', () => {
    const event = data.events[0];
    const dateKey = new Date(event.startTime).toDateString();

    useEventStore.getState().removeEvent(event);

    const remaining = useEventStore.getState().events[dateKey].some((e) => e.id === event.id);
    expect(remaining).toBe(false);
  });
});
