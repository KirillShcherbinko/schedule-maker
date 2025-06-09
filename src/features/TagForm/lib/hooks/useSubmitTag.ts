import type { TTagFormData } from '@/entities/Tag/model/schema';
import { useTagStore } from '@/entities/Tag/model/store';
import type { TMode } from '../../model/types';
import type { TDirtyTagData, TTag } from '@/entities/Tag/model/types';
import { createMode, editMode } from '../../model/consts';
import { tagFormAdding, tagFormUpdating } from '../utils';

export const useTagSubmit = () => {
  const addTag = useTagStore((state) => state.addTag);
  const updateTag = useTagStore((state) => state.updateTag);

  return (
    mode: TMode,
    formValues: TTagFormData,
    dirtyFields: TDirtyTagData,
    editedEvent: TTag | undefined,
    scheduleId?: string,
  ) => {
    if (mode === createMode) {
      addTag(tagFormAdding(formValues, scheduleId));
      return true;
    } else if (mode === editMode && editedEvent) {
      updateTag(editedEvent, tagFormUpdating(formValues, dirtyFields));
      return true;
    }
    return false;
  };
};
