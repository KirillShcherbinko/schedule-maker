import type { TEvent } from '@/entities/Event/model/types';
import type { TTag } from '@/entities/Tag/model/types';

export type TestEventData = {
  title: string;
  date: string; 
  startTime: string;
  endTime: string;
  tags?: Pick<TTag, 'title' | 'color'>[];
}

export const testEventData: TestEventData = {
  title: 'Тестовое событие Cypress',
  date: '2025-06-10',
  startTime: '10:00',
  endTime: '11:30',
  tags: [
    { title: 'Work', color: 'sky' },
    { title: 'Meeting', color: 'lavender' }
  ]
};

export const minimalEventData: TestEventData = {
  title: 'Минимальное событие',
  date: '2025-06-10',
  startTime: '09:00',
  endTime: '09:30'
};

export const mockEventResponse = (data: TestEventData): TEvent => ({
  id: 1,
  scheduleId: 1,
  title: data.title,
  startTime: new Date(`${data.date}T${data.startTime}:00`),
  endTime: new Date(`${data.date}T${data.endTime}:00`),
  tags: (data.tags || []).map((tag, idx) => ({
    id: idx + 1,
    scheduleId: 1,
    title: tag.title,
    color: tag.color,
    events: []
  }))
});