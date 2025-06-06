import { FilterByTag } from '@/features/FilterByTag';
import { tagFilterAtom, tagsAtom } from '../../../model/atoms';
import { useAtom } from 'jotai';
import { useWindowWidth } from '@/shared/lib/hooks/useWindowWidth';
import { BREAKING_WIDTH } from '../model/consts';
import { DesktopLayout } from './DesktopLayout';
import { MobileLayout } from './MobileLayout';

export const TagsList = () => {
  const width = useWindowWidth();

  const [{ tags }] = useAtom(tagsAtom);
  const [, setTags] = useAtom(tagFilterAtom);

  return (
    <div className="flex flex-row items-center justify-between max-w-[392px] w-full">
      {width > BREAKING_WIDTH ? (
        <DesktopLayout>
          <FilterByTag tags={tags} onFilterChange={setTags} />
        </DesktopLayout>
      ) : (
        <MobileLayout>
          <FilterByTag tags={tags} onFilterChange={setTags} />
        </MobileLayout>
      )}
    </div>
  );
};
