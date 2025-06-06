import type { TEvent, TEventsList } from '@/entities/Event/model/types';
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
): Record<string, TEvent[]> => {
  const updatedEvents = { ...events };
  const dateKey = event.startTime.toDateString();
  const eventsForDate = updatedEvents[dateKey] || [];

  updatedEvents[dateKey] = callback(eventsForDate);
  return updatedEvents;
};
