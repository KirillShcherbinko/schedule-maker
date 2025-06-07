import type { TTag } from '@/entities/Tag/model/types';
import type { TError } from '@/shared/model/types';

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
  error: TError;
};

export type TEventStoreAction = {
  setEvents: (events: TEventsList) => void;
  setError: (error: TError) => void;
  addEvent: (event: TEvent) => void;
  removeEvent: (event: TEvent) => void;
  updateEvent: (event: TEvent, eventData: Partial<TEvent>) => void;
};

export type TEventCallback = (eventsForDate: TEvent[]) => TEvent[];
export type TEventResult = { events: TEventsList; error: string | null };
