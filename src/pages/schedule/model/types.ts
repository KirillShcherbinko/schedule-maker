import type { TEvent } from "@/shared/model/types"

export type TEventStoreState = {
  events: TEvent[];
}

export type TEventStoreAction = {
  addEvent: (event: TEvent) => void;
  removeEvent: (eventId: number) => void;
  updateEvent: (eventId: number, eventData: Partial<TEvent>) => void;
  getEventsByDate: (eventDate: Date) => TEvent[];
}