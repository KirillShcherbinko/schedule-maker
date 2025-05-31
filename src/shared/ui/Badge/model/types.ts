export type TBadgeColor =
  | 'sky'
  | 'grass'
  | 'lemon'
  | 'peach'
  | 'lavender'
  | 'mint'
  | 'rose'
  | 'sand'
  | 'ice'
  | 'plum'
  | 'ocean'
  | 'moss'
  | 'amber'
  | 'coral'
  | 'jade'
  | 'blush';

export type TBadge = {
  id?: string | number;
  title: string;
  color: TBadgeColor;
};
