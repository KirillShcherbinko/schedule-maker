import { create } from 'zustand';
import type { TEventStoreAction, TEventStoreState } from './types';

export const useEventsStore = create<TEventStoreState & TEventStoreAction>((set, get) => ({
  events: [],
  addEvent: (event) =>
    set((state) => ({
      events: [...state.events, event],
    })),
  removeEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
    })),
  updateEvent: (eventId, eventData) =>
    set((state) => ({
      events: state.events.map((event) => (event.id === eventId ? { ...event, ...eventData } : event)),
    })),
  getEventsByDate: (eventDate: Date) =>
    get().events.filter((event) => event.startTime.toDateString() === eventDate.toDateString()),
}));
