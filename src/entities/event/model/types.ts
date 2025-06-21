import type { TTag } from '@/entities/tag';
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
  editedEvent: TEvent | undefined;
};

export type TEventStoreAction = {
  addEvent: (event: TEvent) => void;
  removeEvent: (event: TEvent) => void;
  updateEvent: (event: TEvent, eventData: Partial<TEvent>) => void;
};

export type TEventCallback = (eventsForDate: TEvent[]) => TEvent[];
export type TEventResult = { events: TEventsList; error: string | null };

export type TDirtyEventData = Partial<
  Readonly<{
    title?: boolean | undefined;
    startTime?: boolean | undefined;
    endTime?: boolean | undefined;
    date?: boolean | undefined;
    tagIds?: boolean[] | undefined;
  }>
>;
