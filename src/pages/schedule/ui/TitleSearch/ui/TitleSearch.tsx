import { FilterByTitle } from '@/features/FilterByTitle';
import { eventsAtom, titleFilterAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';

export const TitleSearch = () => {
  const [, setTitle] = useAtom(titleFilterAtom);
  const [{ events }] = useAtom(eventsAtom);

  return (
    <div className="max-w-[500px] w-full pt-2">
      <FilterByTitle data={events} onFilterChange={setTitle} placeholder="Filter by title..." />
    </div>
  );
};
