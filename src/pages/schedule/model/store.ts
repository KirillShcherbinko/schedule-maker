import { create } from 'zustand';
import type { TEventStoreAction, TEventStoreState, TTagStoreAction, TTagStoreState } from './types';
import { data } from './consts';

export const useEventsStore = create<TEventStoreState & TEventStoreAction>((set) => ({
  events: data.events,
  filteredEvents: data.events,
  setEvents: (events) => set({ events }),
  setFilteredEvents: (filteredEvents) => set({ filteredEvents }),
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
}));

export const useTagStore = create<TTagStoreState & TTagStoreAction>((set) => ({
  tags: data.tags,
  setTags: (tags) => set({ tags }),
  addTag: (tag) =>
    set((state) => ({
      tags: [...state.tags, tag],
    })),
  removeTag: (tagId: number) =>
    set((state) => ({
      tags: state.tags.filter((tag) => tag.id !== tagId),
    })),
  updateTag: (tagId, tagData) =>
    set((state) => ({
      tags: state.tags.map((tag) => (tag.id === tagId ? { ...tag, ...tagData } : tag)),
    })),
}));
