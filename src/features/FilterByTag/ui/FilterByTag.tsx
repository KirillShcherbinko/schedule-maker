import type { TTag } from '@/entities/Tag/model/types';
import { useState } from 'react';
import { TagRecord } from './TagRecord';
import { useEventStore } from '@/entities/Event/model/store';

type FilterByTagProps = {
  tags: TTag[];
  onFilterChange: (tags: number[]) => void;
};

export const FilterByTag = ({ tags, onFilterChange }: FilterByTagProps) => {
  const events = useEventStore((state) => state.events);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleTagToggle = (tagId: number, checked: boolean) => {
    const newTags = checked ? [...selectedTags, tagId] : selectedTags.filter((id) => id !== tagId);
    setSelectedTags(newTags);

    if (!events) return;
    onFilterChange(newTags);
  };

  return (
    <>
      {tags.map((tag) => (
        <TagRecord
          key={tag.id}
          tag={tag}
          isChecked={selectedTags.includes(tag.id)}
          handleTagToggle={(checked: boolean) => handleTagToggle(tag.id, checked)}
        />
      ))}
    </>
  );
};
