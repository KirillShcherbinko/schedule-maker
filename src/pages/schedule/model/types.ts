import type { TEvent, TTag } from '@/shared/model/types';

export type TEventStoreState = {
  events: TEvent[];
  filteredEvents: TEvent[];
};

export type TEventStoreAction = {
  setEvents: (events: TEvent[]) => void;
  setFilteredEvents: (filteredEvents: TEvent[]) => void;
  addEvent: (event: TEvent) => void;
  removeEvent: (eventId: number) => void;
  updateEvent: (eventId: number, eventData: Partial<TEvent>) => void;
};

export type TTagStoreState = {
  tags: TTag[];
};

export type TTagStoreAction = {
  setTags: (tags: TTag[]) => void;
  addTag: (tag: TTag) => void;
  removeTag: (tagId: number) => void;
  updateTag: (tagId: number, tagData: Partial<TTag>) => void;
};
