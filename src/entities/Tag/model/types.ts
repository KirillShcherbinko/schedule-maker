import type { TEvent } from '@/entities/Event/model/types';
import type { TBadgeColor } from '@/shared/ui/Badge/model/types';

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
