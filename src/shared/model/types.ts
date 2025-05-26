export type TEvent = {
  id: number;
  scheduleId: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  tags: TTag[];
}

export type TTag = {
  id: number;
  scheduleId: number;
  title: string;
  events: TEvent[];
}