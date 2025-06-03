import type { TEvent, TEventsList, TTag } from '@/shared/model/types';

export type TEventStoreState = {
  events: TEventsList;
  added: TEvent[];
  removed: TEvent[];
};

export type TEventStoreAction = {
  setEvents: (events: TEventsList) => void;
  addEvent: (event: TEvent) => void;
  removeEvent: (event: TEvent) => void;
  updateEvent: (newEvent: TEvent, oldEvent: TEvent) => void;
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

export type TUpdateResult = {
  events: TEventsList;
  added: TEvent[];
  removed: TEvent[];
};

export type TEventCallback = (eventsForDate: TEvent[]) => TEvent[];
