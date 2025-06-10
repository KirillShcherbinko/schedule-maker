import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../../api/getEvents';

export const useGetEvents = (scheduleId: number) => {
  return useQuery({
    queryKey: ['events', scheduleId],
    queryFn: () => getEvents(scheduleId),
    enabled: !!scheduleId,
    staleTime: 5 * 60 * 1000,
  });
};
