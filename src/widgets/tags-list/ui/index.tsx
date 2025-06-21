import { useMemo, useCallback } from 'react';
import { FilterByTag } from '@/features/filter-by-tag';
import { useWindowWidth } from '@/shared/lib/hooks';
import { TAGS_LIST_BREAKING_WIDTH } from '../model/consts';
import { DesktopLayout } from './desktop-layout';
import { MobileLayout } from './mobile-layout';
import { useTagStore, type TTag } from '@/entities/tag';
import { EditButtonGroup } from '@/features/edit-button-group';

type TagsListProps = {
  filterTags: (tags: number[]) => void;
};

export const TagsList = ({ filterTags }: TagsListProps) => {
  const width = useWindowWidth();
  const tags = useTagStore((state) => state.tags);

  const renderTagActions = useCallback(
    (tag: TTag) => <EditButtonGroup itemType="tag" item={tag} editFormPath={`tag/${tag.id}/edit`} />,
    [],
  );

  const FilterTags = useMemo(
    () => <FilterByTag tags={tags} onFilterChange={filterTags} renderTagsAction={renderTagActions} />,
    [tags, filterTags, renderTagActions],
  );

  const Layout = width > TAGS_LIST_BREAKING_WIDTH ? DesktopLayout : MobileLayout;

  return (
    <div className="flex flex-row items-center justify-between max-w-[392px] w-full">
      <Layout>{FilterTags}</Layout>
    </div>
  );
};
