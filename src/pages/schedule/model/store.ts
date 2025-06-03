import { create } from 'zustand';
import type { TEventStoreAction, TEventStoreState, TTagStoreAction, TTagStoreState } from './types';
import { data } from './consts';
import { groupEventsByDate, addEvent, removeEvent, updateEvent } from '../lib/utils';

export const useEventStore = create<TEventStoreState & TEventStoreAction>((set) => ({
  events: groupEventsByDate(data.events),
  added: [],
  removed: [],

  setEvents: (events) => set({ events }),

  addEvent: (event) =>
    set((state) => {
      const { events, added, removed } = addEvent(state.events, event);
      return { events, added, removed };
    }),
  removeEvent: (event) =>
    set((state) => {
      const { events, added, removed } = removeEvent(state.events, event);
      return { events, added, removed };
    }),
  updateEvent: (oldEvent, newEvent) =>
    set((state) => {
      const { events, added, removed } = updateEvent(state.events, oldEvent, newEvent);
      return { events, added, removed };
    }),
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
