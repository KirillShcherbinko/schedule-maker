import { useEventStore, type TEvent } from '@/entities/event';
import { useScheduleStore, type TSchedule } from '@/entities/schedule';
import { useTagStore, type TTag } from '@/entities/tag';
import type { TItemToEdit, TItemType } from '../model/types';
import { useLocation, useNavigate } from 'react-router-dom';
import { eventCase, scheduleCase, tagCase } from '../model/consts';

export const useRemoveItem = (itemType: TItemType, item: TItemToEdit) => {
  const removeEvent = useEventStore((state) => state.removeEvent);
  const removeTag = useTagStore((state) => state.removeTag);
  const removeSchedule = useScheduleStore((state) => state.removeSchedule);

  const updateEvent = useEventStore((state) => state.updateEvent);

  const events = useEventStore((state) => state.events);
  const tags = useTagStore((state) => state.tags);

  switch (itemType) {
    case eventCase: {
      return () => {
        const eventToRemove = item as TEvent;
        removeEvent(eventToRemove);

        const updatedTags = tags.map((tag) => {
          const filteredEvents = tag.events.filter((event) => event.id !== item.id);
          return { ...tag, events: filteredEvents };
        });

        useTagStore.setState({ tags: updatedTags });
      };
    }
    case tagCase: {
      return () => {
        const tagToRemove = item as TTag;
        removeTag(item as TTag);

        for (const eventsForDate in events) {
          for (const event of events[eventsForDate]) {
            if (event.tags.some((tag) => tag.id === tagToRemove.id)) {
              updateEvent(event, { tags: event.tags.filter((tag) => tag.id !== tagToRemove.id) });
            }
          }
        }
      };
    }
    case scheduleCase: {
      return () => {
        const scheduleToRemove = item as TSchedule;
        removeSchedule(scheduleToRemove);
      };
    }
    default: {
      throw new Error(`Unknown item type: ${itemType}`);
    }
  }
};

export const useEditItem = (itemType: TItemType, item: TItemToEdit, editFormPath: string) => {
  const navigate = useNavigate();
  const location = useLocation();

  switch (itemType) {
    case eventCase: {
      return () => {
        const event = item as TEvent;
        useEventStore.setState({ editedEvent: event });
        navigate(editFormPath, { state: { backgroundLocation: location } });
      };
    }
    case tagCase: {
      return () => {
        const tag = item as TTag;
        useTagStore.setState({ editedTag: tag });
        navigate(editFormPath, { state: { backgroundLocation: location } });
      };
    }
    case scheduleCase: {
      return () => {
        const schedule = item as TSchedule;
        useScheduleStore.setState({ editedSchedule: schedule });
        navigate(editFormPath, { state: { backgroundLocation: location } });
      };
    }
    default: {
      throw new Error(`Unknown item type: ${itemType}`);
    }
  }
};
