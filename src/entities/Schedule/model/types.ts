import type { TEvent } from '@/entities/event';
import type { TTag } from '@/entities/tag';

export type TSchedule = {
  id: number;
  title: string;
  events: TEvent[];
  tags: TTag[];
};

export type TScheduleStoreState = {
  schedules: TSchedule[];
  editedSchedule: TSchedule | undefined;
};

export type TScheduleStoreAction = {
  addSchedule: (schedule: TSchedule) => void;
  removeSchedule: (schedule: TSchedule) => void;
  updateSchedule: (schedule: TSchedule, scheduleData: Partial<TSchedule>) => void;
};
