import { create } from 'zustand';
import { addEvent, editEventsList, groupEventsByDate, updateEvent } from '../lib/utils';
import { data } from './consts';
import type { TEventStoreAction, TEventStoreState } from './types';

export const useEventStore = create<TEventStoreState & TEventStoreAction>((set) => ({
  events: groupEventsByDate(data.events),
  error: null,

  setEvents: (events) => set({ events }),
  setError: (error) => set({ error }),

  addEvent: (eventToAdd) =>
    set((state) => {
      return editEventsList(state.events, eventToAdd, (eventsForDate) =>
        addEvent(eventToAdd, eventsForDate),
      );
    }),
  removeEvent: (eventToRemove) =>
    set((state) => {
      return editEventsList(state.events, eventToRemove, (eventsForDate) =>
        eventsForDate.filter((event) => event.id !== eventToRemove.id),
      );
    }),
  updateEvent: (eventToUptdate, newEventData) =>
    set((state) => {
      return editEventsList(state.events, eventToUptdate, (eventsForDate) =>
        updateEvent(eventToUptdate, newEventData, eventsForDate),
      );
    }),
}));
