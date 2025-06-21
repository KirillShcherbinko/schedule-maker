import type { TEventFormData } from '@/entities/event';
import { nanoid } from '../model/consts';
import type { TTag } from '@/entities/tag';
import type { TDirtyEventData, TEvent } from '@/entities/event';

export const eventFormAdding = (formValues: TEventFormData, scheduleId: string | undefined, tags: TTag[]): TEvent => {
  const { title, date, startTime, endTime, tagIds } = formValues;

  const selectedTags = tags.filter((tag) => tagIds?.includes(tag.id));
  const startDateTime = new Date(`${date}T${startTime}`);
  const endDateTime = new Date(`${date}T${endTime}`);

  return {
    id: Number(nanoid()),
    scheduleId: scheduleId ? parseInt(scheduleId) : 1,
    title: title,
    startTime: startDateTime,
    endTime: endDateTime,
    tags: selectedTags,
  };
};

export const eventFormUpdating = (
  formValues: TEventFormData,
  dirtyFileds: TDirtyEventData,
  tags: TTag[],
): Partial<TEvent> => {
  const { title, date, startTime, endTime, tagIds } = formValues;

  const changedTitle = dirtyFileds['title'] ? title : undefined;
  const selectedTags = dirtyFileds['tagIds'] ? tags.filter((tag) => tagIds?.includes(tag.id)) : undefined;
  const startDateTime = dirtyFileds['date'] || dirtyFileds['startTime'] ? new Date(`${date}T${startTime}`) : undefined;
  const endDateTime = dirtyFileds['date'] || dirtyFileds['endTime'] ? new Date(`${date}T${endTime}`) : undefined;

  const result: Partial<TEvent> = {};

  if (changedTitle !== undefined) result.title = changedTitle;
  if (selectedTags !== undefined) result.tags = selectedTags;
  if (startDateTime !== undefined) result.startTime = startDateTime;
  if (endDateTime !== undefined) result.endTime = endDateTime;

  return result;
};

export const mergeEvents = (tagEvents: TEvent[], event: TEvent) => {
  const exists = tagEvents.some((e) => e.id === event.id);
  return exists ? tagEvents : [...tagEvents, event];
};

export const removeEvent = (tagEvents: TEvent[], eventId: number) => tagEvents.filter((e) => e.id !== eventId);
