import { Badge } from '@/shared/ui/Badge';
import type { TBadge } from '../../shared/ui/Badge/model/types';

type BadgeListProps<T extends TBadge> = {
  badgeClassName?: string;
  badges: T[];
};

export const BadgeList = <T extends TBadge>({ badgeClassName, badges }: BadgeListProps<T>) => {
  return (
    <div className="flex flex-wrap gap-5">
      {badges.map((badge, index) => (
        <Badge key={badge.id ?? index} className={badgeClassName} variant={badge.color}>
          {badge.title}
        </Badge>
      ))}
    </div>
  );
};
