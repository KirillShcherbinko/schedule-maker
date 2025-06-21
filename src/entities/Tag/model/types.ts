import type { TEvent } from '@/entities/event';
import type { TBadgeColor } from '@/shared/ui/badge';

export type TTag = {
  id: number;
  scheduleId: number;
  title: string;
  color: TBadgeColor;
  events: TEvent[];
};

export type TTagStoreState = {
  tags: TTag[];
  editedTag: TTag | undefined;
};

export type TTagStoreAction = {
  addTag: (tag: TTag) => void;
  removeTag: (tag: TTag) => void;
  updateTag: (tag: TTag, tagData: Partial<TTag>) => void;
};

export type TDirtyTagData = Partial<
  Readonly<{
    title?: boolean | undefined;
    color?: boolean | undefined;
  }>
>;
