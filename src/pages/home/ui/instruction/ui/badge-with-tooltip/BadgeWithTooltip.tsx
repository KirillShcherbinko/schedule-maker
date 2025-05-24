import { Badge } from '@/shared/ui/Badge';
import type { TBadge } from '@/shared/ui/Badge/model/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/Tooltip';
import { motion } from 'framer-motion';

type BadgeWithTooltipProps = {
  badge: TBadge;
  content: string;
};

export const BadgeWithTooltip = ({ badge, content }: BadgeWithTooltipProps) => {
  const MotionBadge = motion.create(Badge);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <MotionBadge
            className="p-2 sm:p-4 text-md sm:text-lg lg:text-xl rounded-[20px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            variant={badge.color}
          >
            {badge.title}
          </MotionBadge>
        </TooltipTrigger>
        <TooltipContent className="max-w-[280px] text-md">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
