import { create } from 'zustand';
import type { TScheduleStoreState, TScheduleStoreAction } from './types';
import { data } from './consts';

export const useScheduleStore = create<TScheduleStoreState & TScheduleStoreAction>((set) => ({
  schedules: data,
  editedSchedule: undefined,

  addSchedule: (scheduleToAdd) =>
    set((state) => ({
      schedules: [...state.schedules, scheduleToAdd],
    })),
  removeSchedule: (scheduleToRemove) =>
    set((state) => ({
      schedules: state.schedules.filter((schedule) => schedule.id !== scheduleToRemove.id),
    })),
  updateSchedule: (scheduleToUpdate, newScheduleData) =>
    set((state) => ({
      schedules: state.schedules.map((schedule) =>
        schedule.id === scheduleToUpdate.id ? { ...schedule, ...newScheduleData } : schedule,
      ),
    })),
}));
