import { motion } from 'framer-motion';
import { Card } from '@/shared/ui/Card';
import { EditButtonGroup } from '@/shared/ui/EditButtonGroup';
import { useScheduleStore } from '../model/store';
import type { TSchedule } from '../model/types';

type ScheduleProps = {
  schedule: TSchedule;
};

export const Schedule = ({ schedule }: ScheduleProps) => {
  const onDelete = useScheduleStore((state) => state.removeSchedule);
  const { title } = schedule;
  const MotionCard = motion.create(Card);

  return (
    <MotionCard
      className={`self-center max-w-[380px] w-full p-4 border-4 border-primary`}
      layout
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <EditButtonGroup item={schedule} onDelete={onDelete} />
      </div>
    </MotionCard>
  );
};
