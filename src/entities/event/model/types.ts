import type { TTag } from '@/entities/Tag/model/types';

export type TEvent = {
  id: number;
  scheduleId: number;
  title: string;
  startTime: Date;
  endTime: Date;
  tags: TTag[];
};

export type TEventsList = Record<string, TEvent[]>;

export type TEventStoreState = {
  events: TEventsList;
};

export type TEventStoreAction = {
  setEvents: (events: TEventsList) => void;
  addEvent: (event: TEvent) => void;
  removeEvent: (event: TEvent) => void;
  updateEvent: (event: TEvent, eventData: Partial<TEvent>) => void;
};

export type TEventCallback = (eventsForDate: TEvent[]) => TEvent[];
