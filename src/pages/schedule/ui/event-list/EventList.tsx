import type { TBadgeColor } from '@/shared/ui/Badge/model/types';
import rawData from '../../model/mocks.json';
import type { TEvent, TTag } from '@/shared/model/types';
import { Event } from '@/entities/event/ui';

export type TMockData = {
  tags: TTag[];
  events: TEvent[];
};

const data: TMockData = {
  tags: rawData.tags.map((tag) => ({
    ...tag,
    color: tag.color as TBadgeColor,
    events: [] as TEvent[],
  })),
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

export const EventList = () => {
  return (
    <div className="flex flex-col gap-4 p-5 w-full">
      {data.events.map((event: TEvent) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};
