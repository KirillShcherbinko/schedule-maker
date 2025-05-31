import { FilterByTitle } from '@/features/filter-by-title';
import { useEventsStore } from '../../model/store';
import { useShallow } from 'zustand/react/shallow';

export const EventTitleFilter = () => {
  const { events, setFilteredEvents } = useEventsStore(
    useShallow((state) => ({
      events: state.events,
      setFilteredEvents: state.setFilteredEvents,
    })),
  );

  return (
    <div className="max-w-[500px] w-full self-center md:self-end">
      <FilterByTitle data={events} onFilterChange={setFilteredEvents} placeholder="Filter by title..." />
    </div>
  );
};
