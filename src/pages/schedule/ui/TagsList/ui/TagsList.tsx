import { FilterByTag } from '@/features/FilterByTag';
import { useTagStore } from '../../../model/store';
import { useShallow } from 'zustand/react/shallow';
import { eventsAtom, tagFilterAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';

export const TagsList = () => {
  const { tags } = useTagStore(useShallow((state) => ({ tags: state.tags })));
  const [{ events }] = useAtom(eventsAtom);

  const [, setTags] = useAtom(tagFilterAtom);

  return (
    <div className="flex flex-row items-center justify-between max-w-[392px] w-full">
      <FilterByTag data={events} tags={tags} onFilterChange={setTags} />
    </div>
  );
};
