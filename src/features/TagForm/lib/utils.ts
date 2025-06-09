import { nanoid } from '../model/consts';
import type { TDirtyTagData, TTag } from '@/entities/Tag/model/types';
import type { TTagFormData } from '@/entities/Tag/model/schema';

export const tagFormAdding = (formValues: TTagFormData, scheduleId: string | undefined): TTag => {
  const { title, color } = formValues;

  return {
    id: Number(nanoid()),
    scheduleId: scheduleId ? parseInt(scheduleId) : 1,
    title: title,
    color: color,
    events: [],
  };
};

export const tagFormUpdating = (formValues: TTagFormData, dirtyFileds: TDirtyTagData): Partial<TTag> => {
  const { title, color } = formValues;

  const changedTitle = dirtyFileds['title'] ? title : undefined;
  const changedColor = dirtyFileds['color'] ? color : undefined;

  const result: Partial<TTag> = {};

  if (changedTitle !== undefined) result.title = changedTitle;
  if (changedColor !== undefined) result.color = changedColor;

  return result;
};
