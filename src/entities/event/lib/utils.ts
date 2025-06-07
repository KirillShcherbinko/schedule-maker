import type { TEvent, TEventResult, TEventsList } from '@/entities/Event/model/types';
import type { TEventCallback } from '../model/types';

export const groupEventsByDate = (events: TEvent[]): Record<string, TEvent[]> => {
  const groupedEvents: Record<string, TEvent[]> = {};

  events.forEach((event) => {
    const currentDate = new Date(event.startTime);
    const endDate = new Date(event.endTime);

    while (currentDate <= endDate) {
      const dateKey = currentDate.toDateString();

      if (!groupedEvents[dateKey]) {
        groupedEvents[dateKey] = [];
      }
      groupedEvents[dateKey].push(event);

      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  return groupedEvents;
};

export const editEventsList = (
  events: TEventsList,
  event: TEvent,
  callback: TEventCallback,
): TEventResult => {
  const updatedEvents = { ...events };
  const dateKey = event.startTime.toDateString();
  const eventsForDate = updatedEvents[dateKey] || [];

  try {
    updatedEvents[dateKey] = callback(eventsForDate);
    return { events: updatedEvents, error: null };
  } catch (err) {
    return { events, error: err instanceof Error ? err.message : 'Error' };
  }
};

export const addEvent = (eventToAdd: TEvent, eventsForDate: TEvent[]): TEvent[] => {
  let inserted = false;
  const updatedEventsForDate = [];

  for (const event of eventsForDate) {
    const validatedStartTime = eventToAdd.startTime;
    const validatedEndTime = eventToAdd.endTime;

    const startTime = event.startTime;
    const endTime = event.endTime;

    if (
      validatedStartTime <= endTime &&
      validatedEndTime >= startTime &&
      (validatedStartTime.getTime() !== startTime.getTime() || validatedEndTime.getTime() !== endTime.getTime())
    ) {
      throw new Error('Невозможно добавить событие: пересечение с существующим событием');
    }

    if (!inserted && validatedStartTime < startTime) {
      updatedEventsForDate.push(eventToAdd);
      inserted = true;
    }

    updatedEventsForDate.push(event);
  }

  if (!inserted) {
    updatedEventsForDate.push(eventToAdd);
  }

  return updatedEventsForDate;
};

export const updateEvent = (
  eventToUpdate: TEvent,
  newEventData: Partial<TEvent>,
  eventsForDate: TEvent[],
): TEvent[] => {
  const updatedEventsForDate = [];

  for (const event of eventsForDate) {
    if (event.id === eventToUpdate.id) continue;

    const validatedStartTime = eventToUpdate.startTime;
    const validatedEndTime = eventToUpdate.endTime;

    const startTime = event.startTime;
    const endTime = event.endTime;

    if (
      validatedStartTime <= endTime &&
      validatedEndTime >= startTime &&
      (validatedStartTime !== startTime || validatedEndTime !== endTime)
    ) {
      throw new Error('Невозможно обновить событие: пересечение с существующим событием');
    }

    for (const event of eventsForDate) {
      if (event.id === eventToUpdate.id) {
        updatedEventsForDate.push({ ...event, ...newEventData });
      } else {
        updatedEventsForDate.push(event);
      }
    }
  }

  return updatedEventsForDate;
};
