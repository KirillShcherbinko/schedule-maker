import type { TEvent } from '@/entities/event';
import type { TSchedule } from '@/entities/schedule';
import type { TTag } from '@/entities/tag';

export type TItemType = 'event' | 'tag' | 'schedule';
export type TItemToEdit = TEvent | TTag | TSchedule;
