import { Tag, type TTag } from '@/entities/tag';
import { useState, type ReactNode } from 'react';
import { useEventStore } from '@/entities/event';

type FilterByTagProps = {
  tags: TTag[];
  onFilterChange: (tags: number[]) => void;
  renderTagsAction: (tag: TTag) => ReactNode;
};

export const FilterByTag = ({ tags, onFilterChange, renderTagsAction }: FilterByTagProps) => {
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
        <Tag
          key={tag.id}
          tag={tag}
          isChecked={selectedTags.includes(tag.id)}
          handleTagToggle={(checked: boolean) => handleTagToggle(tag.id, checked)}
        >
          {renderTagsAction(tag)}
        </Tag>
      ))}
    </>
  );
};
