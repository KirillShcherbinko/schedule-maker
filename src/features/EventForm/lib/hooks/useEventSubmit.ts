import type { EventFormData } from '@/entities/Event/model/schema';
import { useEventStore } from '@/entities/Event/model/store';
import type { TMode } from '../../model/types';
import { eventFormAdding, eventFormUpdating } from '../utils';
import type { TTag } from '@/entities/Tag/model/types';
import type { TDirtyEventData, TEvent } from '@/entities/Event/model/types';
import { createMode, editMode } from '../../model/consts';

export const useEventSubmit = () => {
  const addEvent = useEventStore((state) => state.addEvent);
  const updateEvent = useEventStore((state) => state.updateEvent);

  return (
    mode: TMode,
    formValues: EventFormData,
    dirtyFields: TDirtyEventData,
    editedEvent: TEvent | undefined,
    tags: TTag[],
    scheduleId?: string,
  ) => {
    if (mode === createMode) {
      addEvent(eventFormAdding(formValues, scheduleId, tags));
      return true;
    } else if (mode === editMode && editedEvent) {
      updateEvent(editedEvent, eventFormUpdating(formValues, dirtyFields, tags));
      return true;
    }
    return false;
  };
};
