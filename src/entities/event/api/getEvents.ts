import axiosInstance from '@/shared/api/axiosInstance';

export const getEvents = async(scheduleId: number) => {
  const response = await axiosInstance.get(`/schedules/${scheduleId}/events`);
  return response.data;
}
