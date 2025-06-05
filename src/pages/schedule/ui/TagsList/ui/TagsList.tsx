import { FilterByTag } from '@/features/FilterByTag';
import { tagFilterAtom, tagsAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';

export const TagsList = () => {
  const [{ tags }] = useAtom(tagsAtom);
  const [, setTags] = useAtom(tagFilterAtom);

  return (
    <div className="flex flex-row items-center justify-between max-w-[392px] w-full">
      <FilterByTag tags={tags} onFilterChange={setTags} />
    </div>
  );
};
