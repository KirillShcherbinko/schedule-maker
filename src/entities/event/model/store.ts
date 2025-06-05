import { create } from 'zustand';
import { editEventsList, groupEventsByDate } from '../lib/utils';
import { data } from './consts';
import type { TEventStoreAction, TEventStoreState } from './types';

export const useEventStore = create<TEventStoreState & TEventStoreAction>((set) => ({
  events: groupEventsByDate(data.events),

  setEvents: (events) => set({ events }),

  addEvent: (eventToAdd) =>
    set((state) => ({
      events: editEventsList(state.events, eventToAdd, (eventsForDate) => [...eventsForDate, eventToAdd]),
    })),
  removeEvent: (eventToRemove) =>
    set((state) => ({
      events: editEventsList(state.events, eventToRemove, (eventsForDate) =>
        eventsForDate.filter((event) => event.id !== eventToRemove.id),
      ),
    })),
  updateEvent: (eventToUptdate, newEventData) =>
    set((state) => ({
      events: editEventsList(state.events, eventToUptdate, (eventsForDate) =>
        eventsForDate.map((event) => (event.id === eventToUptdate.id ? { ...event, ...newEventData } : event)),
      ),
    })),
}));
