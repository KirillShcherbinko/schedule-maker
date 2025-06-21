import type { TEventFormData } from '@/entities/event';
import { useEventStore } from '@/entities/event';
import type { TMode } from '../model/types';
import { eventFormAdding, eventFormUpdating, mergeEvents, removeEvent } from './utils';
import type { TTag } from '@/entities/tag';
import type { TDirtyEventData, TEvent } from '@/entities/event';
import { createMode, editMode } from '../model/consts';
import { useTagStore } from '@/entities/tag';

export const useEventSubmit = () => {
  const addEvent = useEventStore((state) => state.addEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);

  const updateTag = useTagStore((state) => state.updateTag);

  return (
    mode: TMode,
    formValues: TEventFormData,
    dirtyFields: TDirtyEventData,
    editedEvent: TEvent | undefined,
    tags: TTag[],
    scheduleId?: string,
  ) => {
    if (mode === createMode) {
      const newEvent = eventFormAdding(formValues, scheduleId, tags);
      addEvent(newEvent);

      newEvent.tags.forEach((tag) =>
        updateTag(tag, {
          events: mergeEvents(tag.events, newEvent),
        }),
      );
      return true;
    }

    if (mode === editMode && editedEvent) {
      const newEventData = eventFormUpdating(formValues, dirtyFields, tags);
      updateEvent(editedEvent, newEventData);

      const updatedEvent: TEvent = { ...editedEvent, ...newEventData };

      const prevTagIds = editedEvent.tags.map((t) => t.id);
      const nextTagIds = updatedEvent.tags.map((t) => t.id);

      tags.forEach((tag) => {
        if (prevTagIds.includes(tag.id) && !nextTagIds.includes(tag.id)) {
          updateTag(tag, {
            events: removeEvent(tag.events, editedEvent.id),
          });
        }
      });

      updatedEvent.tags.forEach((tag) => {
        updateTag(tag, {
          events: mergeEvents(tag.events, updatedEvent),
        });
      });

      return true;
    }

    return false;
  };
};
