import { FilterByTitle } from '@/features/filter-by-title';
import { eventsAtom, titleFilterAtom } from '../../model/atoms';
import { useAtom } from 'jotai';

export const EventTitleFilter = () => {
  const [, setTitle] = useAtom(titleFilterAtom);
  const [{ events }] = useAtom(eventsAtom);

  return (
    <div className="max-w-[500px] w-full self-center md:self-end">
      <FilterByTitle data={events} onFilterChange={setTitle} placeholder="Filter by title..." />
    </div>
  );
};
