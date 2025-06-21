import type { TTagFormData } from '@/entities/tag';
import { useTagStore } from '@/entities/tag';
import { useEventStore } from '@/entities/event';
import type { TMode } from '../model/types';
import type { TDirtyTagData, TTag } from '@/entities/tag';
import type { TEvent } from '@/entities/event';
import { createMode, editMode } from '../model/consts';
import { tagFormAdding, tagFormUpdating } from './utils';

export const useTagSubmit = () => {
  const addTag = useTagStore((state) => state.addTag);
  const updateTag = useTagStore((state) => state.updateTag);

  const updateEvent = useEventStore((state) => state.updateEvent);
  const events = useEventStore((state) => state.events);

  return (
    mode: TMode,
    formValues: TTagFormData,
    dirtyFields: TDirtyTagData,
    editedTag: TTag | undefined,
    scheduleId?: string,
  ) => {
    if (mode === createMode) {
      addTag(tagFormAdding(formValues, scheduleId));
      return true;
    }

    if (mode === editMode && editedTag) {
      const updatedTag = { ...editedTag, ...tagFormUpdating(formValues, dirtyFields) };
      updateTag(editedTag, tagFormUpdating(formValues, dirtyFields));

      editedTag.events.forEach((event: TEvent) => {
        const updatedTags = event.tags.map((tag) => (tag.id === editedTag.id ? updatedTag : tag));
        updateEvent(event, { tags: updatedTags });
      });

      Object.values(events).forEach((eventsForDate: TEvent[]) => {
        eventsForDate.forEach((event: TEvent) => {
          const hasTag = event.tags.some((tag) => tag.id === editedTag.id);
          if (hasTag) {
            const updatedTags = event.tags.map((tag) => (tag.id === editedTag.id ? updatedTag : tag));
            updateEvent(event, { tags: updatedTags });
          }
        });
      });

      return true;
    }

    return false;
  };
};
