import { Badge } from '@/shared/ui/Badge';
import type { TBadge } from '../../Badge/model/types';
import { cn } from '@/shared/lib/utils';

type BadgeListProps<T extends TBadge> = {
  className?: string;
  badgeClassName?: string;
  badges: T[];
};

export const BadgeList = <T extends TBadge>({ className, badgeClassName, badges }: BadgeListProps<T>) => {
  return (
    <div className={cn(className, 'flex flex-wrap')}>
      {badges.map((badge, index) => (
        <Badge key={badge.id ?? index} className={badgeClassName} variant={badge.color}>
          {badge.title}
        </Badge>
      ))}
    </div>
  );
};
