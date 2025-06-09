import type { TTag } from './types';
import rawData from './mocks.json';
import type { TEvent } from '@/entities/Event/model/types';
import type { TBadgeColor } from '@/shared/ui/Badge/model/types';

export type TMockData = {
  tags: TTag[];
};

export const data: TMockData = {
  tags: rawData.tags.map((tag) => ({
    ...tag,
    color: tag.color as TBadgeColor,
    events: [] as TEvent[],
  })),
};

export const TAG_VALIDATION_LINK = 'tagValidation';

export const colors = [
  'sky',
  'grass',
  'lemon',
  'peach',
  'lavender',
  'mint',
  'rose',
  'sand',
  'ice',
  'plum',
  'ocean',
  'moss',
  'amber',
  'coral',
  'jade',
  'blush',
];
