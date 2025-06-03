import type { TEvent, TEventsList } from '@/shared/model/types';
import type { TEventCallback, TUpdateResult } from '../model/types';

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
  targetEvent: TEvent,
  callback: TEventCallback,
): Record<string, TEvent[]> => {
  const updatedEvents = { ...events };
  const currentDate = new Date(targetEvent.startTime);
  const endDate = new Date(targetEvent.endTime);

  while (currentDate <= endDate) {
    const dateKey = currentDate.toDateString();
    const eventsForDate = updatedEvents[dateKey] || [];
    updatedEvents[dateKey] = callback(eventsForDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return updatedEvents;
};

export const addEvent = (events: TEventsList, newEvent: TEvent): TUpdateResult => {
  const added: TEvent[] = [];
  const updatedEvents = editEventsList(events, newEvent, (eventsForDate) => {
    added.push(newEvent);
    return [...eventsForDate, newEvent];
  });

  return { events: updatedEvents, added, removed: [] };
};

export const removeEvent = (events: Record<string, TEvent[]>, eventToRemove: TEvent): TUpdateResult => {
  let removed: TEvent[] = [];
  const updatedEvents = editEventsList(events, eventToRemove, (eventsForDate) => {
    const eventsToRemove = eventsForDate.filter((event) => {
      const match = event.id === eventToRemove.id;
      if (match) removed.push(event);
      return !match;
    });
    return eventsToRemove;
  });

  return { events: updatedEvents, added: [], removed };
};

export const updateEvent = (events: TEventsList, oldEvent: TEvent, newEvent: TEvent): TUpdateResult => {
  const removeResult = removeEvent(events, oldEvent);
  const addResult = addEvent(removeResult.events, newEvent);

  return {
    events: addResult.events,
    added: addResult.added,
    removed: removeResult.removed,
  };
};
