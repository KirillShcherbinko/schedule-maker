import rawData from './mocks.json';
import type { TBadgeColor } from '@/shared/ui/badge';
import type { TEvent } from './types';

export type TMockData = {
  events: TEvent[];
};

export const data: TMockData = {
  events: rawData.events.map((event) => ({
    ...event,
    startTime: new Date(event.startTime),
    endTime: new Date(event.endTime),
    tags: event.tags.map((tag) => ({
      ...tag,
      color: tag.color as TBadgeColor,
      events: [] as TEvent[],
    })),
  })),
};

export const EVENT_VALIDATION_LINK = 'eventValidation';
export const EVENT_NAMESPACE = { ns: 'event' };
