import type { TEvent, TTag } from "@/shared/model/types";
import type { TBadgeColor } from "@/shared/ui/Badge/model/types";
import rawData from './mocks.json';


export type TMockData = {
  tags: TTag[];
  events: TEvent[];
};

export const data: TMockData = {
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