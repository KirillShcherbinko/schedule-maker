import type { TBadgeColor } from '../ui/Badge/model/types';

export type TEvent = {
  id: number;
  scheduleId: number;
  title: string;
  startTime: Date;
  endTime: Date;
  tags: TTag[];
};

export type TTag = {
  id: number;
  scheduleId: number;
  title: string;
  color: TBadgeColor;
  events: TEvent[];
};

export type TEventsList = Record<string, TEvent[]>;
