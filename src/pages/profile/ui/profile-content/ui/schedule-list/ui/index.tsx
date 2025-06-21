import { AnimatePresence } from 'framer-motion';
import { useScheduleStore } from '@/entities/schedule';
import type { TSchedule } from '@/entities/schedule';
import { Schedule } from '@/entities/schedule';

export const SchedulesList = () => {
  const schedules = useScheduleStore((state) => state.schedules);

  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-4 w-full">
      <AnimatePresence mode="popLayout">
        {schedules.map((schedule: TSchedule) => (
          <Schedule key={schedule.id} schedule={schedule} />
        ))}
      </AnimatePresence>
    </div>
  );
};
