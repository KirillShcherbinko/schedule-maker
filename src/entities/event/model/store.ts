import { create } from 'zustand';
import { addEvent, editEventsList, groupEventsByDate } from '../lib/utils';
import { data } from './consts';
import type { TEventStoreAction, TEventStoreState } from './types';

export const useEventStore = create<TEventStoreState & TEventStoreAction>((set) => ({
  events: groupEventsByDate(data.events),
  error: null,
  editedEvent: undefined,

  addEvent: (eventToAdd) =>
    set((state) => {
      return editEventsList(state.events, eventToAdd.startTime, (eventsForDate) => addEvent(eventToAdd, eventsForDate));
    }),
  removeEvent: (eventToRemove) =>
    set((state) => {
      return editEventsList(state.events, eventToRemove.startTime, (eventsForDate) =>
        eventsForDate.filter((event) => event.id !== eventToRemove.id),
      );
    }),
  updateEvent: (eventToUpdate, newEventData) =>
    set((state) => {
      const { events } = editEventsList(state.events, eventToUpdate.startTime, (eventsForDate) =>
        eventsForDate.filter((event) => event.id !== eventToUpdate.id),
      );
      const updatedEvent = { ...eventToUpdate, ...newEventData };

      return editEventsList(events, newEventData?.startTime || eventToUpdate.startTime, (eventsForDate) =>
        addEvent(updatedEvent, eventsForDate),
      );
    }),
}));
